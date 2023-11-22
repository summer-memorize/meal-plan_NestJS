import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
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
    return { result: 'ok' };
    // return this.mealPlanService.getMealPlans(query);
  }

  @Post()
  createMealPlan(@Body() body) {
    console.log('body:  ', body);
    return { result: 'ok' };
    // return this.mealPlanService.createMealPlan(body);
  }

  @Put()
  updateMealPlan(@Body() body) {
    console.log('body:  ', body);
    return { result: 'ok' };
    // return this.mealPlanService.updateMealPlan(body);
  }

  @Delete()
  deleteMealPlan(@Query() query) {
    console.log('query:  ', query);
    return { result: 'ok' };
    // return this.mealPlanService.deleteMealPlan(query);
  }
}
