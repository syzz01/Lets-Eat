import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { Item, ItemDocument } from "src/schemas/item.schema";
import { ItemDto } from "./dto/item.dto";
import { FilterItemDto } from "./dto/filter-item.dto";
import { filter } from "rxjs";


@Injectable()
export class ItemService{
    constructor(
        @InjectModel(Item.name) private itemModel: Model<ItemDocument>,
    ){}

    async create(itemDto: ItemDto): Promise<Item>{
        try{
            const createItem = new this.itemModel(itemDto);
            return await createItem.save();
        } catch (error) {
            throw error;
        }
    }

    async findAll(filters: FilterItemDto): Promise<Item[]>{
        const query: Record<string, any> = {};

        Object.entries(filters).forEach(([key, value]) => {
            if(value === undefined)
                return;
            if(key === 'itemName'){
                query.itemName = { $regex: value, $options: 'i' };
            }
            else if(key === 'organizationId'){
                if(Types.ObjectId.isValid(value)) {
                    query.organization = {
                        $elemMatch: {
                            _id: new Types.ObjectId(value)
                        }
                    }
                }
            }
            else if(key === 'branchId'){
                if(Types.ObjectId.isValid(value)) {
                    query.organization.branch = {
                        $elemMatch: {
                            _id: new Types.ObjectId(value)
                        }
                    }
                }
            }
            else{
                query[key] = value;
            }
        })

        return this.itemModel.find(query).exec();
    }

    async findOne(id: string): Promise<Item> {
        const item = await this.itemModel.findById(id).exec();
        if(!item){
            throw new NotFoundException('Organization not found');
        }
        return item;
    }

    async update(id: string, itemDto: ItemDto): Promise<Item> {
        const updateItem = await this.itemModel.findByIdAndUpdate(
            id,
            itemDto,
            {new: true}
        ).exec();
        if(!updateItem){
            throw new NotFoundException('Item Not Found');
        }
        return updateItem;
    }

    async delete(id: string): Promise<{_id: string}>{
        const deleteItem = await this.itemModel.findByIdAndDelete(id).exec();
        if(!deleteItem){
            throw new NotFoundException('Item Not Found');
        }
        return {_id: deleteItem._id.toString()};
    }
}