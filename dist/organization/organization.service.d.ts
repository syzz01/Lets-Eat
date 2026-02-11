import { Model } from 'mongoose';
import { Organization, OrganizationDocument } from '../schemas/organization.schema';
import { OrganizationDto } from './dto/organization.dto';
import { FilterOrganizationDto } from './dto/filter-organization.dto';
export declare class OrganizationService {
    private organizationModel;
    constructor(organizationModel: Model<OrganizationDocument>);
    create(organizationDto: OrganizationDto): Promise<Organization>;
    findAll(filters: FilterOrganizationDto): Promise<Organization[]>;
    findOne(id: string): Promise<Organization>;
    update(id: string, organizationDto: OrganizationDto): Promise<Organization>;
    remove(id: string): Promise<{
        _id: string;
    }>;
}
