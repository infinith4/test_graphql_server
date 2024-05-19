import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductCategoriesService } from './product-categories.service';
import { ProductCategory } from './entities/product-category.entity';
import { CreateProductCategoryInput } from './dto/create-product-category.input';
import { UpdateProductCategoryInput } from './dto/update-product-category.input';

@Resolver(() => ProductCategory)
export class ProductCategoriesResolver {
  constructor(private readonly productCategoriesService: ProductCategoriesService) {}

  @Mutation(() => ProductCategory)
  createProductCategory(@Args('createProductCategoryInput') createProductCategoryInput: CreateProductCategoryInput) {
    return this.productCategoriesService.create(createProductCategoryInput);
  }

  @Query(() => [ProductCategory], { name: 'productCategories' })
  findAll() {
    return this.productCategoriesService.findAll();
  }

  @Query(() => ProductCategory, { name: 'productCategory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productCategoriesService.findOne(id);
  }

  @Mutation(() => ProductCategory)
  updateProductCategory(@Args('updateProductCategoryInput') updateProductCategoryInput: UpdateProductCategoryInput) {
    return this.productCategoriesService.update(updateProductCategoryInput.id, updateProductCategoryInput);
  }

  @Mutation(() => ProductCategory)
  removeProductCategory(@Args('id', { type: () => Int }) id: number) {
    return this.productCategoriesService.remove(id);
  }
}
