import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { HydratedDocument, SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

export type UserDocument = HydratedDocument<User>;

@Schema(options)
export class User {
  @Prop({ required: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
