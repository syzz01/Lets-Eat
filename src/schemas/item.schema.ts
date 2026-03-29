import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Organization, OrganizationSchema } from './user-organization.schema';

export type ItemDocument = HydratedDocument<Item>;

@Schema({
    collection: 'iIemCollection',
    versionKey: false
})
export class Item {
    @Prop()
    itemNo: string;

    @Prop()
    itemName: string;

    @Prop()
    itemUnit: string;

    @Prop()
    itemStock: number;

    @Prop()
    description: string;

    @Prop()
    unitPrice: number;

    @Prop()
    isActive: boolean;

    @Prop()
    itemImage: string;

    @Prop({ type: [OrganizationSchema] })
    organization: Organization[];
}

export const ItemSchema = SchemaFactory.createForClass(Item);