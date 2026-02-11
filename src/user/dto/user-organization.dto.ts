// /user/dto/user-organization.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { UserBranchDto } from './user-branch.dto';

export class UserOrganizationDto {
  @ApiProperty({ example: 'O001' })
  @IsString()
  organizationId: string;

  @ApiProperty({ example: 'ORG001' })
  @IsString()
  organizationNo: string;

  @ApiProperty({ example: 'admin' })
  @IsString()
  roles: string;

  @ApiProperty({ type: () => [UserBranchDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UserBranchDto)
  branch: UserBranchDto[];

}
