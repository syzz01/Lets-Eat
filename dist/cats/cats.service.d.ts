import { Model } from 'mongoose';
import { Cat, CatDocument } from '../schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { FilterCatDto } from './dto/filter-cat.dto';
export declare class CatsService {
    private catModel;
    constructor(catModel: Model<CatDocument>);
    create(createCatDto: CreateCatDto): Promise<Cat>;
    findAll(filters: FilterCatDto): Promise<Cat[]>;
    findOne(id: string): Promise<Cat>;
    update(id: string, updateCatDto: UpdateCatDto): Promise<Cat>;
    remove(id: string): Promise<Cat>;
}
