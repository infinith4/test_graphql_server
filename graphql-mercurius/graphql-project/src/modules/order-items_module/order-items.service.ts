import { Injectable } from '@nestjs/common';
import { CreateOrderItemInput } from './dto/create-order-item.input';
import { UpdateOrderItemInput } from './dto/update-order-item.input';
import { PrismaService } from 'nestjs-prisma';
@Injectable()
export class OrderItemsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createOrderItemInput: CreateOrderItemInput) {
    return 'This action adds a new orderItem';
  }

  findAll() {
    return this.prisma.order_items.findMany({
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} orderItem`;
  }

  update(id: number, updateOrderItemInput: UpdateOrderItemInput) {
    return `This action updates a #${id} orderItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderItem`;
  }
}
