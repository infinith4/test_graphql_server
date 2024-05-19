import { Module } from '@nestjs/common';
import { CartItemsService } from './cart-items.service';
import { CartItemsResolver } from './cart-items.resolver';

@Module({
  providers: [CartItemsResolver, CartItemsService],
})
export class CartItemsModule {}
