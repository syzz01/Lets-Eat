// /user/dto/organization.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { BranchDto } from './branch.dto';

export class OrganizationDto {

  @ApiProperty({ example: 'ORG001' })
  @IsString()
  organizationNo: string;

  @ApiProperty({ example: 'Megah Holdings' })
  @IsString()
  organizationName: string;

  @ApiProperty({ example: 'No. 123 Jalan Test, Pusat Industri Test, 81100 Johor Bahru, Johor' })
  @IsString()
  address: string;

  @ApiProperty({ type: () => [BranchDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BranchDto)
  branch: BranchDto[];

  @ApiProperty({ example: '1002' })
  @IsString()
  tenantId: string;

}
