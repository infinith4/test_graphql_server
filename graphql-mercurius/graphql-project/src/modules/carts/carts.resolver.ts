import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CartsService } from './carts.service';
import { carts } from './entities/cart.entity';
import { CreateCartInput } from './dto/create-cart.input';
import { UpdateCartInput } from './dto/update-cart.input';

@Resolver(() => carts)
export class CartsResolver {
  constructor(private readonly cartsService: CartsService) {}

  @Mutation(() => carts)
  createCart(@Args('createCartInput') createCartInput: CreateCartInput) {
    return this.cartsService.create(createCartInput);
  }

  @Query(() => [carts], { name: 'carts' })
  findAll() {
    return this.cartsService.findAll();
  }

  @Query(() => carts, { name: 'cart' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cartsService.findOne(id);
  }

  @Mutation(() => carts)
  updateCart(@Args('updateCartInput') updateCartInput: UpdateCartInput) {
    return this.cartsService.update(updateCartInput.id, updateCartInput);
  }

  @Mutation(() => carts)
  removeCart(@Args('id', { type: () => Int }) id: number) {
    return this.cartsService.remove(id);
  }
}
