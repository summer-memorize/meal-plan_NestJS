import { Controller } from '@nestjs/common';
import { MealPlanService } from './meal-plan.service';

@Controller('meal-plan')
export class MealPlanController {
  constructor(private readonly mealPlanService: MealPlanService) {}
}
