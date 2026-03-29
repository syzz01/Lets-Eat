import { ApiProperty } from '@nestjs/swagger';
import { IsString, ValidateNested, IsArray, IsNumber, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { UserOrganizationDto } from 'src/user/dto/user-organization.dto';

export class ItemDto {
    
    @ApiProperty({ example: 'ITM001' })
    @IsString()
    itemNo: string;

    @ApiProperty({ example: 'Ice Cream Vanilla' })
    @IsString()
    itemName: string;

    @ApiProperty({ example: 'pcs' })
    @IsString()
    itemUnit: string;

    @ApiProperty({ example: 10 })
    @IsNumber()
    itemStock: number;

    @ApiProperty({ example: 'Description Test' })
    @IsString()
    description: string;

    @ApiProperty({ example: 5 })
    @IsNumber()
    unitPrice: number;

    @ApiProperty({ example: true })
    @IsBoolean()
    isActive: boolean;

    @ApiProperty({ example: '' })
    @IsString()
    itemImage: string;

    @ApiProperty({ type: () => [UserOrganizationDto] })
    @ValidateNested()
    @Type(() => UserOrganizationDto)
    organization: UserOrganizationDto[];
}