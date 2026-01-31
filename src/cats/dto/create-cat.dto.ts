// /cats/dto/create-cat.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty({ example: 'Miko' })
  name: string;

  @ApiProperty({ example: 4 })
  age: number;

  @ApiProperty({ example: 'Mixed' })
  breed: string;
}
