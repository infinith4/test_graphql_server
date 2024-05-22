import { Injectable } from '@nestjs/common';
import { CreateCartItemInput } from './dto/create-cart-item.input';
import { UpdateCartItemInput } from './dto/update-cart-item.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class CartItemsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCartItemInput: CreateCartItemInput) {
    return 'This action adds a new cartItem';
  }

  findAll() {
    return this.prisma.cart_items.findMany({
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} cartItem`;
  }

  update(id: number, updateCartItemInput: UpdateCartItemInput) {
    return `This action updates a #${id} cartItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} cartItem`;
  }
}
