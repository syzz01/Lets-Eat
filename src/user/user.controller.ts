// /user/user.controller.ts
import {Controller,Get,Post,Patch,Delete,Body,Param, Query, Put,} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiExtraModels, ApiParam } from '@nestjs/swagger';
import { get } from 'mongoose';
import { FilterUserDto } from './dto/filter-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiExtraModels(FilterUserDto)
  @Get()
  async findAll(@Query() filterDto: FilterUserDto){
    return this.userService.findAll(filterDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string){
    return this.userService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto,){
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string){
    return this.userService.remove(id);
  }
  // @Delete(':id')
  // async remove(@Param('id') id: string) {
  //   return this.catsService.remove(id);
  // }

}
