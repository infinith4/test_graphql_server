import { Test, TestingModule } from '@nestjs/testing';
import { CartsResolver } from './carts.resolver';
import { CartsService } from './carts.service';

describe('CartsResolver', () => {
  let resolver: CartsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartsResolver, CartsService],
    }).compile();

    resolver = module.get<CartsResolver>(CartsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
