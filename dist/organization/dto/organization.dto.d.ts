import { BranchDto } from './branch.dto';
export declare class OrganizationDto {
    organizationNo: string;
    organizationName: string;
    address: string;
    branch: BranchDto[];
    tenantId: string;
}
