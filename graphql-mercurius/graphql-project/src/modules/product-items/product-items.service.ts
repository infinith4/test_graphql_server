import { Injectable } from '@nestjs/common';
import { CreateProductItemInput } from './dto/create-product-item.input';
import { UpdateProductItemInput } from './dto/update-product-item.input';

@Injectable()
export class ProductItemsService {
  create(createProductItemInput: CreateProductItemInput) {
    return 'This action adds a new productItem';
  }

  findAll() {
    return `This action returns all productItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productItem`;
  }

  update(id: number, updateProductItemInput: UpdateProductItemInput) {
    return `This action updates a #${id} productItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} productItem`;
  }
}
