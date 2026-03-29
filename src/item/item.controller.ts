import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ItemService } from "./item.service";
import { ItemDto } from "./dto/item.dto";
import { FilterItemDto } from "./dto/filter-item.dto";
import { ApiBody, ApiExtraModels, ApiParam } from '@nestjs/swagger';

@Controller('item')
export class ItemController{
    constructor(private readonly itemService: ItemService) { }

    @Post()
    async create (@Body() itemDto: ItemDto){
        return this.itemService.create(itemDto);
    }

    @ApiExtraModels(FilterItemDto)
    @Get()
    async findAll (@Query() filterDto: FilterItemDto){
        return this.itemService.findAll(filterDto);
    }

    @Get(':id')
    async findOne (@Param('id') id: string){
        return this.itemService.findOne(id);
    }

    @Put(':id')
    async update (@Param('id') id: string, @Body() itemDto: ItemDto){
        return this.itemService.update(id, itemDto);
    }

    @Delete(':id')
    async delete (@Param('id') id:string){
        return this.itemService.delete(id);
    }

}