import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductItemsService } from './product-items.service';
import { ProductItem } from './entities/product-item.entity';
import { CreateProductItemInput } from './dto/create-product-item.input';
import { UpdateProductItemInput } from './dto/update-product-item.input';

@Resolver(() => ProductItem)
export class ProductItemsResolver {
  constructor(private readonly productItemsService: ProductItemsService) {}

  @Mutation(() => ProductItem)
  createProductItem(@Args('createProductItemInput') createProductItemInput: CreateProductItemInput) {
    return this.productItemsService.create(createProductItemInput);
  }

  @Query(() => [ProductItem], { name: 'productItems' })
  findAll() {
    return this.productItemsService.findAll();
  }

  @Query(() => ProductItem, { name: 'productItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productItemsService.findOne(id);
  }

  @Mutation(() => ProductItem)
  updateProductItem(@Args('updateProductItemInput') updateProductItemInput: UpdateProductItemInput) {
    return this.productItemsService.update(updateProductItemInput.id, updateProductItemInput);
  }

  @Mutation(() => ProductItem)
  removeProductItem(@Args('id', { type: () => Int }) id: number) {
    return this.productItemsService.remove(id);
  }
}
