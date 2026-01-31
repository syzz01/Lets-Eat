// /user/dto/update-user.dto.ts
import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(
    OmitType(CreateUserDto, ['userNo'] as const),
) {}
