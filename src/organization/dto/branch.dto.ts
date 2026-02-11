// /organization/dto/branch.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';

export class BranchDto {

    @ApiProperty({ example: 'BR001' })
    @IsString()
    branchNo: string;

    @ApiProperty({ example: 'Main Branches' })
    @IsString()
    branchName: string;

    @ApiProperty({ example: 'Address' })
    @IsString()
    address: string;

    @ApiProperty({ example: false })
    @IsBoolean()
    isHq: boolean;

    @ApiProperty({ example: 1 })
    @IsInt()
    seqNo: number;
}
