// filter-organization.dto.ts
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class FilterOrganizationDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  organizationNo?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  organizationName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  branchNo?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  branchName?: string;

}
