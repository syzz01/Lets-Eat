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
exports.ItemService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const item_schema_1 = require("../schemas/item.schema");
let ItemService = class ItemService {
    itemModel;
    constructor(itemModel) {
        this.itemModel = itemModel;
    }
    async create(itemDto) {
        try {
            const createItem = new this.itemModel(itemDto);
            return await createItem.save();
        }
        catch (error) {
            throw error;
        }
    }
    async findAll(filters) {
        const query = {};
        Object.entries(filters).forEach(([key, value]) => {
            if (value === undefined)
                return;
            if (key === 'itemName') {
                query.itemName = { $regex: value, $options: 'i' };
            }
            else if (key === 'organizationId') {
                if (mongoose_2.Types.ObjectId.isValid(value)) {
                    query.organization = {
                        $elemMatch: {
                            _id: new mongoose_2.Types.ObjectId(value)
                        }
                    };
                }
            }
            else if (key === 'branchId') {
                if (mongoose_2.Types.ObjectId.isValid(value)) {
                    query.organization.branch = {
                        $elemMatch: {
                            _id: new mongoose_2.Types.ObjectId(value)
                        }
                    };
                }
            }
            else {
                query[key] = value;
            }
        });
        return this.itemModel.find(query).exec();
    }
    async findOne(id) {
        const item = await this.itemModel.findById(id).exec();
        if (!item) {
            throw new common_1.NotFoundException('Organization not found');
        }
        return item;
    }
    async update(id, itemDto) {
        const updateItem = await this.itemModel.findByIdAndUpdate(id, itemDto, { new: true }).exec();
        if (!updateItem) {
            throw new common_1.NotFoundException('Item Not Found');
        }
        return updateItem;
    }
    async delete(id) {
        const deleteItem = await this.itemModel.findByIdAndDelete(id).exec();
        if (!deleteItem) {
            throw new common_1.NotFoundException('Item Not Found');
        }
        return { _id: deleteItem._id.toString() };
    }
};
exports.ItemService = ItemService;
exports.ItemService = ItemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(item_schema_1.Item.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ItemService);
//# sourceMappingURL=item.service.js.map