// /cats/cats.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat, CatDocument } from '../schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { FilterCatDto } from './dto/filter-cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat.name) private catModel: Model<CatDocument>,
  ) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(filters: FilterCatDto): Promise<Cat[]> {
    const query: Record<string, any> = {};

    Object.entries(filters).forEach(([key, value]) => {
      if (value === undefined) return;

      if (key === 'name') {
        query.name = { $regex: value, $options: 'i' };
      } else {
        query[key] = value;
      }
    });

    return this.catModel.find(query).exec();
  }

  async findOne(id: string): Promise<Cat> {
    const cat = await this.catModel.findById(id).exec();
    if (!cat) {
      throw new NotFoundException('Cat not found');
    }
    return cat;
  }

  async update(id: string, updateCatDto: UpdateCatDto): Promise<Cat> {
    const updatedCat = await this.catModel.findByIdAndUpdate(
      id,
      updateCatDto,
      { new: true },
    ).exec();

    if (!updatedCat) {
      throw new NotFoundException('Cat not found');
    }

    return updatedCat;
  }

  async remove(id: string): Promise<Cat> {
    const deletedCat = await this.catModel.findByIdAndDelete(id).exec();

    if (!deletedCat) {
      throw new NotFoundException('Cat not found');
    }

    return deletedCat;
  }
}
