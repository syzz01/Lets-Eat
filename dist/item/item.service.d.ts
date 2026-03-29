import { Model } from "mongoose";
import { Item, ItemDocument } from "src/schemas/item.schema";
import { ItemDto } from "./dto/item.dto";
import { FilterItemDto } from "./dto/filter-item.dto";
export declare class ItemService {
    private itemModel;
    constructor(itemModel: Model<ItemDocument>);
    create(itemDto: ItemDto): Promise<Item>;
    findAll(filters: FilterItemDto): Promise<Item[]>;
    findOne(id: string): Promise<Item>;
    update(id: string, itemDto: ItemDto): Promise<Item>;
    delete(id: string): Promise<{
        _id: string;
    }>;
}
