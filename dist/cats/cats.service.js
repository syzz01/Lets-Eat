"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cat_schema_1 = require("../schemas/cat.schema");
let CatsService = class CatsService {
    catModel;
    constructor(catModel) {
        this.catModel = catModel;
    }
    async create(createCatDto) {
        const createdCat = new this.catModel(createCatDto);
        return createdCat.save();
    }
    async findAll(filters) {
        const query = {};
        Object.entries(filters).forEach(([key, value]) => {
            if (value === undefined)
                return;
            if (key === 'name') {
                query.name = { $regex: value, $options: 'i' };
            }
            else {
                query[key] = value;
            }
        });
        return this.catModel.find(query).exec();
    }
    async findOne(id) {
        const cat = await this.catModel.findById(id).exec();
        if (!cat) {
            throw new common_1.NotFoundException('Cat not found');
        }
        return cat;
    }
    async update(id, updateCatDto) {
        const updatedCat = await this.catModel.findByIdAndUpdate(id, updateCatDto, { new: true }).exec();
        if (!updatedCat) {
            throw new common_1.NotFoundException('Cat not found');
        }
        return updatedCat;
    }
    async remove(id) {
        const deletedCat = await this.catModel.findByIdAndDelete(id).exec();
        if (!deletedCat) {
            throw new common_1.NotFoundException('Cat not found');
        }
        return deletedCat;
    }
};
exports.CatsService = CatsService;
exports.CatsService = CatsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cat_schema_1.Cat.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CatsService);
//# sourceMappingURL=cats.service.js.map