import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderItemsService } from './order-items.service';
import { OrderItem } from './entities/order-item.entity';
import { CreateOrderItemInput } from './dto/create-order-item.input';
import { UpdateOrderItemInput } from './dto/update-order-item.input';

@Resolver(() => OrderItem)
export class OrderItemsResolver {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Mutation(() => OrderItem)
  createOrderItem(@Args('createOrderItemInput') createOrderItemInput: CreateOrderItemInput) {
    return this.orderItemsService.create(createOrderItemInput);
  }

  @Query(() => [OrderItem], { name: 'orderItems' })
  findAll() {
    return this.orderItemsService.findAll();
  }

  @Query(() => OrderItem, { name: 'orderItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.orderItemsService.findOne(id);
  }

  @Mutation(() => OrderItem)
  updateOrderItem(@Args('updateOrderItemInput') updateOrderItemInput: UpdateOrderItemInput) {
    return this.orderItemsService.update(updateOrderItemInput.id, updateOrderItemInput);
  }

  @Mutation(() => OrderItem)
  removeOrderItem(@Args('id', { type: () => Int }) id: number) {
    return this.orderItemsService.remove(id);
  }
}
