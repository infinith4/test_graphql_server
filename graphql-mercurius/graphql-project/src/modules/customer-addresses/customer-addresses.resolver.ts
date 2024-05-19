import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CustomerAddressesService } from './customer-addresses.service';
import { customer_addresses } from './entities/customer-address.entity';
import { CreateCustomerAddressInput } from './dto/create-customer-address.input';
import { UpdateCustomerAddressInput } from './dto/update-customer-address.input';

@Resolver(() => customer_addresses)
export class CustomerAddressesResolver {
  constructor(private readonly customerAddressesService: CustomerAddressesService) {}

  @Mutation(() => customer_addresses)
  createCustomerAddress(@Args('createCustomerAddressInput') createCustomerAddressInput: CreateCustomerAddressInput) {
    return this.customerAddressesService.create(createCustomerAddressInput);
  }

  @Query(() => [customer_addresses], { name: 'customerAddresses' })
  findAll() {
    return this.customerAddressesService.findAll();
  }

  @Query(() => customer_addresses, { name: 'customerAddress' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.customerAddressesService.findOne(id);
  }

  @Mutation(() => customer_addresses)
  updateCustomerAddress(@Args('updateCustomerAddressInput') updateCustomerAddressInput: UpdateCustomerAddressInput) {
    return this.customerAddressesService.update(updateCustomerAddressInput.id, updateCustomerAddressInput);
  }

  @Mutation(() => customer_addresses)
  removeCustomerAddress(@Args('id', { type: () => Int }) id: number) {
    return this.customerAddressesService.remove(id);
  }
}
