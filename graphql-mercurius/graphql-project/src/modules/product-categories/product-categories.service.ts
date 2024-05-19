import { Injectable } from '@nestjs/common';
import { CreateProductCategoryInput } from './dto/create-product-category.input';
import { UpdateProductCategoryInput } from './dto/update-product-category.input';

@Injectable()
export class ProductCategoriesService {
  create(createProductCategoryInput: CreateProductCategoryInput) {
    return 'This action adds a new productCategory';
  }

  findAll() {
    return `This action returns all productCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productCategory`;
  }

  update(id: number, updateProductCategoryInput: UpdateProductCategoryInput) {
    return `This action updates a #${id} productCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} productCategory`;
  }
}
