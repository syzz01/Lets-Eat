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
exports.OrganizationSchema = exports.Organization = exports.BranchSchema = exports.Branch = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Branch = class Branch {
    branchId;
    branchNo;
    branchName;
};
exports.Branch = Branch;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Branch.prototype, "branchId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Branch.prototype, "branchNo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Branch.prototype, "branchName", void 0);
exports.Branch = Branch = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Branch);
exports.BranchSchema = mongoose_1.SchemaFactory.createForClass(Branch);
let Organization = class Organization {
    organizationId;
    organizationNo;
    organizationName;
    branch;
};
exports.Organization = Organization;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Organization.prototype, "organizationId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Organization.prototype, "organizationNo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Organization.prototype, "organizationName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.BranchSchema], default: [] }),
    __metadata("design:type", Array)
], Organization.prototype, "branch", void 0);
exports.Organization = Organization = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], Organization);
exports.OrganizationSchema = mongoose_1.SchemaFactory.createForClass(Organization);
//# sourceMappingURL=user-organization.schema.js.map