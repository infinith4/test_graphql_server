import { Test, TestingModule } from '@nestjs/testing';
import { CustomerAddressesResolver } from './customer-addresses.resolver';
import { CustomerAddressesService } from './customer-addresses.service';

describe('CustomerAddressesResolver', () => {
  let resolver: CustomerAddressesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerAddressesResolver, CustomerAddressesService],
    }).compile();

    resolver = module.get<CustomerAddressesResolver>(CustomerAddressesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
