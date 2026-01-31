// /user/dto/create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsBoolean,
  IsDateString,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'A001' })
  @IsString()
  userNo: string;

  @ApiProperty({ example: 'Syazani Adli' })
  @IsString()
  fullName: string;

  @ApiProperty({ example: 'Syaz' })
  @IsString()
  shortName: string;

  @ApiProperty({ example: '2000-05-08' })
  @IsDateString()
  dateOfBirth: Date;

  @ApiProperty({ example: 'admin' })
  @IsString()
  roles: string;

  @ApiProperty({ example: 'syaz@eat.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '0189998888' })
  @IsString()
  contact: string;

  @ApiProperty({ example: 'No. 123, Jalan Test, Kompleks Test, 81100 Johor Bahru, Johor' })
  @IsString()
  address: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  isActive: boolean;
}
