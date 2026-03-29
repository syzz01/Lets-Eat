// /organization/organization.controller.ts
import { Controller, Get, Post, Patch, Delete, Body, Param, Query, Put, } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationDto } from './dto/organization.dto';
import { ApiBody, ApiExtraModels, ApiParam } from '@nestjs/swagger';
import { get } from 'mongoose';
import { FilterOrganizationDto } from './dto/filter-organization.dto';

@Controller('organization')
export class OrganizationController {
    constructor(private readonly organizationService: OrganizationService) { }

    @Post()
    async create(@Body() organizationDto: OrganizationDto) {
        return this.organizationService.create(organizationDto);
    }

    @ApiExtraModels(FilterOrganizationDto)
    @Get()
    async findAll(@Query() filterDto: FilterOrganizationDto) {
        return this.organizationService.findAll(filterDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string){
        return this.organizationService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() organizationDto: OrganizationDto,){
        return this.organizationService.update(id, organizationDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string){
        return this.organizationService.remove(id);
    }

}