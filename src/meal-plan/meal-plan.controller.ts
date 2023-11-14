import { Controller, Get, Query } from '@nestjs/common';
import { MealPlanService } from './meal-plan.service';

@Controller('meal-plan')
export class MealPlanController {
  constructor(private readonly mealPlanService: MealPlanService) {}

  @Get()
  getMealPlans(@Query() query): string {
    console.log('query:  ', query);
    return 'This action returns all meal plans';
    // return this.mealPlanService.getMealPlans(query);
  }
}
