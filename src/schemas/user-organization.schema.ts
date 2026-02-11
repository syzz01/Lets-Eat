import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class Branch {
  @Prop()
  branchId: string;

  @Prop()
  branchNo: string;

  @Prop()
  branchName: string;
  
}

export const BranchSchema = SchemaFactory.createForClass(Branch);

@Schema({ _id: false })
export class Organization {
  @Prop()
  organizationId: string;

  @Prop()
  organizationNo: string;

  @Prop()
  organizationName: string;

  @Prop({ type: [BranchSchema], default: [] })
  branch: Branch[];
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
