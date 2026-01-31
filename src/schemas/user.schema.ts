// /schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema({ 
  collection: 'UserCollection',
  versionKey: false 
})
export class User {
  @Prop()
  userNo: string;

  @Prop()
  fullName: string;

  @Prop()
  shortName: string;

  @Prop()
  dateOfBirth: Date;

  @Prop()
  roles: string;

  @Prop()
  email: string;

  @Prop()
  contact: string;

  @Prop()
  address: string;

  @Prop()
  isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);