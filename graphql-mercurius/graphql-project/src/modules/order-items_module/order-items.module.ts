import { Module } from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { OrderItemsResolver } from './order-items.resolver';

@Module({
  providers: [OrderItemsResolver, OrderItemsService],
})
export class OrderItemsModule {}
