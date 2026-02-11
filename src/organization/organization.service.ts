// /user/user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Organization, OrganizationDocument } from '../schemas/organization.schema';
// import { CreateUserDto } from './dto/create-user.dto';
// import { FilterUserDto } from './dto/filter-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { OrganizationDto } from './dto/organization.dto';
import { FilterOrganizationDto } from './dto/filter-organization.dto';

@Injectable()
export class OrganizationService {
    constructor(
        @InjectModel(Organization.name) private organizationModel: Model<OrganizationDocument>,
    ) { }

    async create(organizationDto: OrganizationDto): Promise<Organization> {
        try {
            const createdOrganization = new this.organizationModel(organizationDto);
            return await createdOrganization.save();
        } catch (error) {
            console.error('CREATE USER ERROR:', error);
            throw error;
        }
    }

    async findAll(filters: FilterOrganizationDto): Promise<Organization[]> {
        const query: Record<string, any> = {};
        Object.entries(filters).forEach(([key, value]) => {
            if (value === undefined)
                return;
            if (key === 'organizationName') {
                query.organizationName = { $regex: value, $options: 'i' };
            }
            else if (key === 'branchName') {
                    query.branch = {$elemMatch: {branchName: { $regex: value, $options: 'i' }}};
            }
            else {
                query[key] = value;
            }
        })
        return this.organizationModel.find(query).exec();
    }

    async findOne(id: string): Promise<Organization> {
        const organization = await this.organizationModel.findById(id).exec();
        if(!organization){
            throw new NotFoundException('Organization not found');
        }
        return organization;
    }

    async update(id: string, organizationDto: OrganizationDto): Promise<Organization> {
        const updateOrganization = await this.organizationModel.findByIdAndUpdate(
            id,
            organizationDto,
            {new: true},
        ).exec();

        if(!updateOrganization){
            throw new NotFoundException('Organization Not Found');
        }

        return updateOrganization;
    }

    async remove(id: string): Promise<{_id: string}> {
        const deleteOrganization = await this.organizationModel.findByIdAndDelete(id).exec();
        if(!deleteOrganization){
            throw new NotFoundException('Organization Not Found');
        }
        return {_id: deleteOrganization._id.toString()};
    }

    //   async remove(id: string): Promise<{ _id: string }> {
    //     const deleteUser = await this.userModel.findByIdAndDelete(id).exec();

    //     if(!deleteUser){
    //       throw new NotFoundException('User not found');
    //     }
    //     return { _id: deleteUser._id.toString() };
    //   }

}
