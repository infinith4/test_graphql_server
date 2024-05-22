import { Injectable } from '@nestjs/common';
import { CreateCartInput } from './dto/create-cart.input';
import { UpdateCartInput } from './dto/update-cart.input';
import { PrismaService } from 'nestjs-prisma';
@Injectable()
export class CartsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCartInput: CreateCartInput) {
    return 'This action adds a new cart';
  }

  findAll() {
    return this.prisma.carts.findMany({
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartInput: UpdateCartInput) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
