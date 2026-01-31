// /cats/cats.controller.ts
import {Controller,Get,Post,Patch,Delete,Body,Param, Query,} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { FilterCatDto } from './dto/filter-cat.dto';
import { ApiBody, ApiExtraModels, ApiParam, ApiQuery } from '@nestjs/swagger';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  // @ApiQuery({ type: FilterCatDto })
  // @ApiQuery({ name: 'name', required: false })
  // @ApiQuery({ name: 'age', required: false })
  // @ApiQuery({ name: 'breed', required: false })
  @ApiExtraModels(FilterCatDto)
  @Get()
  async findAll(@Query() filterDto: FilterCatDto) {
    return this.catsService.findAll(filterDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.catsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string,@Body() updateCatDto: UpdateCatDto,){
    return this.catsService.update(id, updateCatDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.catsService.remove(id);
  }
}
