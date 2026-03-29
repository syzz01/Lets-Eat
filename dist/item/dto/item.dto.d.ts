import { UserOrganizationDto } from 'src/user/dto/user-organization.dto';
export declare class ItemDto {
    itemNo: string;
    itemName: string;
    itemUnit: string;
    itemStock: number;
    description: string;
    unitPrice: number;
    isActive: boolean;
    itemImage: string;
    organization: UserOrganizationDto[];
}
