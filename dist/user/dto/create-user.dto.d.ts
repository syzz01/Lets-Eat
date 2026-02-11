import { UserOrganizationDto } from './user-organization.dto';
export declare class CreateUserDto {
    userNo: string;
    fullName: string;
    shortName: string;
    dateOfBirth: Date;
    roles: string;
    email: string;
    contact: string;
    address: string;
    isActive: boolean;
    organization: UserOrganizationDto[];
}
