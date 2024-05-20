import { Injectable } from '@nestjs/common';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { PrismaService } from 'nestjs-prisma';
@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCustomerInput: CreateCustomerInput) {
    return 'This action adds a new customer';
  }

  findAll() {
    return this.prisma.customers.findMany({
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerInput: UpdateCustomerInput) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
