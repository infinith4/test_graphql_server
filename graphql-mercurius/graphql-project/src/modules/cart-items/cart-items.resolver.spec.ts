import { Test, TestingModule } from '@nestjs/testing';
import { CartItemsResolver } from './cart-items.resolver';
import { CartItemsService } from './cart-items.service';

describe('CartItemsResolver', () => {
  let resolver: CartItemsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartItemsResolver, CartItemsService],
    }).compile();

    resolver = module.get<CartItemsResolver>(CartItemsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
