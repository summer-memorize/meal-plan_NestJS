import {
  Controller,
  Get,
  Query,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { MealPlanService } from './meal-plan.service';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';

@Controller('mealplans')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class MealPlanController {
  constructor(private readonly mealPlanService: MealPlanService) {}

  @Get()
  getMealPlans(@Query() query) {
    console.log('query:  ', query);
    return { result: 'hi' };
    // return this.mealPlanService.getMealPlans(query);
  }
}
