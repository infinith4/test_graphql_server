import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CustomerAddressesService } from './customer-addresses.service';
import { CustomerAddress } from './entities/customer-address.entity';
import { CreateCustomerAddressInput } from './dto/create-customer-address.input';
import { UpdateCustomerAddressInput } from './dto/update-customer-address.input';

@Resolver(() => CustomerAddress)
export class CustomerAddressesResolver {
  constructor(private readonly customerAddressesService: CustomerAddressesService) {}

  @Mutation(() => CustomerAddress)
  createCustomerAddress(@Args('createCustomerAddressInput') createCustomerAddressInput: CreateCustomerAddressInput) {
    return this.customerAddressesService.create(createCustomerAddressInput);
  }

  @Query(() => [CustomerAddress], { name: 'customerAddresses' })
  findAll() {
    return this.customerAddressesService.findAll();
  }

  @Query(() => CustomerAddress, { name: 'customerAddress' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.customerAddressesService.findOne(id);
  }

  @Mutation(() => CustomerAddress)
  updateCustomerAddress(@Args('updateCustomerAddressInput') updateCustomerAddressInput: UpdateCustomerAddressInput) {
    return this.customerAddressesService.update(updateCustomerAddressInput.id, updateCustomerAddressInput);
  }

  @Mutation(() => CustomerAddress)
  removeCustomerAddress(@Args('id', { type: () => Int }) id: number) {
    return this.customerAddressesService.remove(id);
  }
}
