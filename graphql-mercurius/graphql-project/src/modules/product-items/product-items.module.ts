import { Module } from '@nestjs/common';
import { ProductItemsService } from './product-items.service';
import { ProductItemsResolver } from './product-items.resolver';

@Module({
  providers: [ProductItemsResolver, ProductItemsService],
})
export class ProductItemsModule {}
