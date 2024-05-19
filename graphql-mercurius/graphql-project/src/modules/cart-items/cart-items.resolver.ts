import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CartItemsService } from './cart-items.service';
import { CartItem } from './entities/cart-item.entity';
import { CreateCartItemInput } from './dto/create-cart-item.input';
import { UpdateCartItemInput } from './dto/update-cart-item.input';

@Resolver(() => CartItem)
export class CartItemsResolver {
  constructor(private readonly cartItemsService: CartItemsService) {}

  @Mutation(() => CartItem)
  createCartItem(@Args('createCartItemInput') createCartItemInput: CreateCartItemInput) {
    return this.cartItemsService.create(createCartItemInput);
  }

  @Query(() => [CartItem], { name: 'cartItems' })
  findAll() {
    return this.cartItemsService.findAll();
  }

  @Query(() => CartItem, { name: 'cartItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cartItemsService.findOne(id);
  }

  @Mutation(() => CartItem)
  updateCartItem(@Args('updateCartItemInput') updateCartItemInput: UpdateCartItemInput) {
    return this.cartItemsService.update(updateCartItemInput.id, updateCartItemInput);
  }

  @Mutation(() => CartItem)
  removeCartItem(@Args('id', { type: () => Int }) id: number) {
    return this.cartItemsService.remove(id);
  }
}
