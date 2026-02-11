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
exports.OrganizationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const organization_schema_1 = require("../schemas/organization.schema");
let OrganizationService = class OrganizationService {
    organizationModel;
    constructor(organizationModel) {
        this.organizationModel = organizationModel;
    }
    async create(organizationDto) {
        try {
            const createdOrganization = new this.organizationModel(organizationDto);
            return await createdOrganization.save();
        }
        catch (error) {
            console.error('CREATE USER ERROR:', error);
            throw error;
        }
    }
    async findAll(filters) {
        const query = {};
        Object.entries(filters).forEach(([key, value]) => {
            if (value === undefined)
                return;
            if (key === 'organizationName') {
                query.organizationName = { $regex: value, $options: 'i' };
            }
            else if (key === 'branchName') {
                query.branch = { $elemMatch: { branchName: { $regex: value, $options: 'i' } } };
            }
            else {
                query[key] = value;
            }
        });
        return this.organizationModel.find(query).exec();
    }
    async findOne(id) {
        const organization = await this.organizationModel.findById(id).exec();
        if (!organization) {
            throw new common_1.NotFoundException('Organization not found');
        }
        return organization;
    }
    async update(id, organizationDto) {
        const updateOrganization = await this.organizationModel.findByIdAndUpdate(id, organizationDto, { new: true }).exec();
        if (!updateOrganization) {
            throw new common_1.NotFoundException('Organization Not Found');
        }
        return updateOrganization;
    }
    async remove(id) {
        const deleteOrganization = await this.organizationModel.findByIdAndDelete(id).exec();
        if (!deleteOrganization) {
            throw new common_1.NotFoundException('Organization Not Found');
        }
        return { _id: deleteOrganization._id.toString() };
    }
};
exports.OrganizationService = OrganizationService;
exports.OrganizationService = OrganizationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(organization_schema_1.Organization.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrganizationService);
//# sourceMappingURL=organization.service.js.map