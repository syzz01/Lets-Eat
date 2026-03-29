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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const user_organization_dto_1 = require("../../user/dto/user-organization.dto");
class ItemDto {
    itemNo;
    itemName;
    itemUnit;
    itemStock;
    description;
    unitPrice;
    isActive;
    itemImage;
    organization;
}
exports.ItemDto = ItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ITM001' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ItemDto.prototype, "itemNo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ice Cream Vanilla' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ItemDto.prototype, "itemName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'pcs' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ItemDto.prototype, "itemUnit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ItemDto.prototype, "itemStock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Description Test' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ItemDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ItemDto.prototype, "unitPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ItemDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ItemDto.prototype, "itemImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [user_organization_dto_1.UserOrganizationDto] }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => user_organization_dto_1.UserOrganizationDto),
    __metadata("design:type", Array)
], ItemDto.prototype, "organization", void 0);
//# sourceMappingURL=item.dto.js.map