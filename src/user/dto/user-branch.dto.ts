// /user/dto/branch.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UserBranchDto {
  @ApiProperty({ example: 'B001' })
  @IsString()
  branchId: string;

  @ApiProperty({ example: 'BR001' })
  @IsString()
  branchNo: string;

  @ApiProperty({ example: 'Main Branch' })
  @IsString()
  branchName: string;
  
}
