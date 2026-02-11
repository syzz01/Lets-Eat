import { OrganizationService } from './organization.service';
import { OrganizationDto } from './dto/organization.dto';
import { FilterOrganizationDto } from './dto/filter-organization.dto';
export declare class OrganizationController {
    private readonly organizationService;
    constructor(organizationService: OrganizationService);
    create(organizationDto: OrganizationDto): Promise<import("../schemas/organization.schema").Organization>;
    findAll(filterDto: FilterOrganizationDto): Promise<import("../schemas/organization.schema").Organization[]>;
    findOne(id: string): Promise<import("../schemas/organization.schema").Organization>;
    update(id: string, organizationDto: OrganizationDto): Promise<import("../schemas/organization.schema").Organization>;
    remove(id: string): Promise<{
        _id: string;
    }>;
}
