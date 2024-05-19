import { Test, TestingModule } from '@nestjs/testing';
import { ProductCategoriesResolver } from './product-categories.resolver';
import { ProductCategoriesService } from './product-categories.service';

describe('ProductCategoriesResolver', () => {
  let resolver: ProductCategoriesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductCategoriesResolver, ProductCategoriesService],
    }).compile();

    resolver = module.get<ProductCategoriesResolver>(ProductCategoriesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
