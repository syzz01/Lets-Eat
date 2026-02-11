import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrganizationDocument = HydratedDocument<Organization>;

@Schema({ versionKey: false })
export class Branch {

  @Prop()
  branchNo: string;

  @Prop()
  branchName: string;

  @Prop()
  address: string;

  @Prop()
  isHq: boolean;
}

export const BranchSchema = SchemaFactory.createForClass(Branch);

@Schema({ 
    collection: 'OrganizationCollection',
    versionKey: false  
})
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
