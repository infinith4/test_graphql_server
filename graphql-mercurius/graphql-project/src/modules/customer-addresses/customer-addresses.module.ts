import { Module } from '@nestjs/common';
import { CustomerAddressesService } from './customer-addresses.service';
import { CustomerAddressesResolver } from './customer-addresses.resolver';

@Module({
  providers: [CustomerAddressesResolver, CustomerAddressesService],
})
export class CustomerAddressesModule {}
