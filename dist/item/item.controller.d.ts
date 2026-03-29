import { ItemService } from "./item.service";
import { ItemDto } from "./dto/item.dto";
import { FilterItemDto } from "./dto/filter-item.dto";
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    create(itemDto: ItemDto): Promise<import("../schemas/item.schema").Item>;
    findAll(filterDto: FilterItemDto): Promise<import("../schemas/item.schema").Item[]>;
    findOne(id: string): Promise<import("../schemas/item.schema").Item>;
    update(id: string, itemDto: ItemDto): Promise<import("../schemas/item.schema").Item>;
    delete(id: string): Promise<{
        _id: string;
    }>;
}
