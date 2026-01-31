// /cats/dto/update-cat.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateCatDto } from './create-cat.dto';

export class UpdateCatDto extends PartialType(CreateCatDto) {}
