import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { PrismaService } from 'nestjs-prisma';
@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createOrderInput: CreateOrderInput) {
    return 'This action adds a new order';
  }

  findAll() {
    return this.prisma.orders.findMany({
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderInput: UpdateOrderInput) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
