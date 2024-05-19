import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CartItemsService } from './cart-items.service';
import { cart_items } from './entities/cart-item.entity';
import { CreateCartItemInput } from './dto/create-cart-item.input';
import { UpdateCartItemInput } from './dto/update-cart-item.input';

@Resolver(() => cart_items)
export class CartItemsResolver {
  constructor(private readonly cartItemsService: CartItemsService) {}

  @Mutation(() => cart_items)
  createCartItem(@Args('createCartItemInput') createCartItemInput: CreateCartItemInput) {
    return this.cartItemsService.create(createCartItemInput);
  }

  @Query(() => [cart_items], { name: 'cartItems' })
  findAll() {
    return this.cartItemsService.findAll();
  }

  @Query(() => cart_items, { name: 'cartItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cartItemsService.findOne(id);
  }

  @Mutation(() => cart_items)
  updateCartItem(@Args('updateCartItemInput') updateCartItemInput: UpdateCartItemInput) {
    return this.cartItemsService.update(updateCartItemInput.id, updateCartItemInput);
  }

  @Mutation(() => cart_items)
  removeCartItem(@Args('id', { type: () => Int }) id: number) {
    return this.cartItemsService.remove(id);
  }
}
