import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { FilterCatDto } from './dto/filter-cat.dto';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto): Promise<import("../schemas/cat.schema").Cat>;
    findAll(filterDto: FilterCatDto): Promise<import("../schemas/cat.schema").Cat[]>;
    findOne(id: string): Promise<import("../schemas/cat.schema").Cat>;
    update(id: string, updateCatDto: UpdateCatDto): Promise<import("../schemas/cat.schema").Cat>;
    remove(id: string): Promise<import("../schemas/cat.schema").Cat>;
}
