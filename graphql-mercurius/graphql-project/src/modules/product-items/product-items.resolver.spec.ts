import { Test, TestingModule } from '@nestjs/testing';
import { ProductItemsResolver } from './product-items.resolver';
import { ProductItemsService } from './product-items.service';

describe('ProductItemsResolver', () => {
  let resolver: ProductItemsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductItemsResolver, ProductItemsService],
    }).compile();

    resolver = module.get<ProductItemsResolver>(ProductItemsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
