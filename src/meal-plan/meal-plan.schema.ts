import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ArrayMaxSize, IsArray, IsNotEmpty, IsString } from 'class-validator';
import { HydratedDocument, SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

export type MealPlanDocument = HydratedDocument<MealPlan>;

@Schema(options)
export class MealPlan {
  @Prop({ required: true })
  @IsArray()
  @ArrayMaxSize(256)
  breakfast: Array<string>;

  @Prop({ required: true })
  @IsArray()
  @ArrayMaxSize(256)
  lunch: Array<string>;

  @Prop({ required: true })
  @IsArray()
  @ArrayMaxSize(256)
  dinner: Array<string>;

  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  date: string; // YYYY-MM-DD
}

export const MealPlanSchema = SchemaFactory.createForClass(MealPlan);
