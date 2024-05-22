import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesCreateNestedOneWithoutProduct_categoriesInput } from '../categories/categories-create-nested-one-without-product-categories.input';

@InputType()
export class product_categoriesCreateWithoutProductsInput {

    @Field(() => categoriesCreateNestedOneWithoutProduct_categoriesInput, {nullable:false})
    categories!: categoriesCreateNestedOneWithoutProduct_categoriesInput;
}
