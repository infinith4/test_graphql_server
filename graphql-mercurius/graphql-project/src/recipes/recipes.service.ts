import { Injectable } from '@nestjs/common';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';
import { Recipe } from './entities/recipe.entity';

@Injectable()
export class RecipesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: CreateRecipeInput): Promise<Recipe> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Recipe> {
    return {} as any;
  }

  async findAll(): Promise<Recipe[]> {
    return [] as Recipe[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
