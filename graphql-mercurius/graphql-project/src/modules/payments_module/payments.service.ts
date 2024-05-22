import { Injectable } from '@nestjs/common';
import { CreatePaymentInput } from './dto/create-payment.input';
import { UpdatePaymentInput } from './dto/update-payment.input';
import { PrismaService } from 'nestjs-prisma';
@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createPaymentInput: CreatePaymentInput) {
    return 'This action adds a new payment';
  }

  findAll() {
    return this.prisma.payments.findMany({
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentInput: UpdatePaymentInput) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
