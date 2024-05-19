import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderItemsService } from './order-items.service';
import { order_items } from './entities/order-item.entity';
import { CreateOrderItemInput } from './dto/create-order-item.input';
import { UpdateOrderItemInput } from './dto/update-order-item.input';

@Resolver(() => order_items)
export class OrderItemsResolver {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Mutation(() => order_items)
  createOrderItem(@Args('createOrderItemInput') createOrderItemInput: CreateOrderItemInput) {
    return this.orderItemsService.create(createOrderItemInput);
  }

  @Query(() => [order_items], { name: 'orderItems' })
  findAll() {
    return this.orderItemsService.findAll();
  }

  @Query(() => order_items, { name: 'orderItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.orderItemsService.findOne(id);
  }

  @Mutation(() => order_items)
  updateOrderItem(@Args('updateOrderItemInput') updateOrderItemInput: UpdateOrderItemInput) {
    return this.orderItemsService.update(updateOrderItemInput.id, updateOrderItemInput);
  }

  @Mutation(() => order_items)
  removeOrderItem(@Args('id', { type: () => Int }) id: number) {
    return this.orderItemsService.remove(id);
  }
}
