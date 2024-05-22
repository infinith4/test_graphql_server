import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesCreateNestedOneWithoutProduct_categoriesInput } from '../categories/categories-create-nested-one-without-product-categories.input';
import { productsCreateNestedOneWithoutProduct_categoriesInput } from '../products/products-create-nested-one-without-product-categories.input';
import { Type } from 'class-transformer';

@InputType()
export class product_categoriesCreateInput {

    @Field(() => categoriesCreateNestedOneWithoutProduct_categoriesInput, {nullable:false})
    categories!: categoriesCreateNestedOneWithoutProduct_categoriesInput;

    @Field(() => productsCreateNestedOneWithoutProduct_categoriesInput, {nullable:false})
    @Type(() => productsCreateNestedOneWithoutProduct_categoriesInput)
    products!: productsCreateNestedOneWithoutProduct_categoriesInput;
}
