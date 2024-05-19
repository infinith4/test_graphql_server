import { Injectable } from '@nestjs/common';
import { CreateCustomerAddressInput } from './dto/create-customer-address.input';
import { UpdateCustomerAddressInput } from './dto/update-customer-address.input';

@Injectable()
export class CustomerAddressesService {
  create(createCustomerAddressInput: CreateCustomerAddressInput) {
    return 'This action adds a new customerAddress';
  }

  findAll() {
    return `This action returns all customerAddresses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customerAddress`;
  }

  update(id: number, updateCustomerAddressInput: UpdateCustomerAddressInput) {
    return `This action updates a #${id} customerAddress`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerAddress`;
  }
}
