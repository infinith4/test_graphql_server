import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductCategoriesService } from './product-categories.service';
import { product_categories } from './entities/product-category.entity';
import { CreateProductCategoryInput } from './dto/create-product-category.input';
import { UpdateProductCategoryInput } from './dto/update-product-category.input';

@Resolver(() => product_categories)
export class ProductCategoriesResolver {
  constructor(private readonly productCategoriesService: ProductCategoriesService) {}

  @Mutation(() => product_categories)
  createProductCategory(@Args('createProductCategoryInput') createProductCategoryInput: CreateProductCategoryInput) {
    return this.productCategoriesService.create(createProductCategoryInput);
  }

  @Query(() => [product_categories], { name: 'productCategories' })
  findAll() {
    return this.productCategoriesService.findAll();
  }

  @Query(() => product_categories, { name: 'productCategory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productCategoriesService.findOne(id);
  }

  @Mutation(() => product_categories)
  updateProductCategory(@Args('updateProductCategoryInput') updateProductCategoryInput: UpdateProductCategoryInput) {
    return this.productCategoriesService.update(updateProductCategoryInput.id, updateProductCategoryInput);
  }

  @Mutation(() => product_categories)
  removeProductCategory(@Args('id', { type: () => Int }) id: number) {
    return this.productCategoriesService.remove(id);
  }
}
