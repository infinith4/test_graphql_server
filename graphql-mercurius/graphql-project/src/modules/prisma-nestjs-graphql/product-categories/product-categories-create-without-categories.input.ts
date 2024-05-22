import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsCreateNestedOneWithoutProduct_categoriesInput } from '../products/products-create-nested-one-without-product-categories.input';
import { Type } from 'class-transformer';

@InputType()
export class product_categoriesCreateWithoutCategoriesInput {

    @Field(() => productsCreateNestedOneWithoutProduct_categoriesInput, {nullable:false})
    @Type(() => productsCreateNestedOneWithoutProduct_categoriesInput)
    products!: productsCreateNestedOneWithoutProduct_categoriesInput;
}
