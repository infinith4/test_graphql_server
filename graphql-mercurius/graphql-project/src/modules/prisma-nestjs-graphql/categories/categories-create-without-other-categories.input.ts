import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { categoriesCreateNestedOneWithoutOther_categoriesInput } from './categories-create-nested-one-without-other-categories.input';
import { productsCreateNestedManyWithoutCategoriesInput } from '../products/products-create-nested-many-without-categories.input';

@InputType()
export class categoriesCreateWithoutOther_categoriesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => categoriesCreateNestedOneWithoutOther_categoriesInput, {nullable:true})
    categories?: categoriesCreateNestedOneWithoutOther_categoriesInput;

    @Field(() => productsCreateNestedManyWithoutCategoriesInput, {nullable:true})
    products?: productsCreateNestedManyWithoutCategoriesInput;
}
