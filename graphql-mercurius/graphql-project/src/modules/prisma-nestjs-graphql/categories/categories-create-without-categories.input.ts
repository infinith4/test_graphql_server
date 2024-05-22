import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { categoriesCreateNestedManyWithoutCategoriesInput } from './categories-create-nested-many-without-categories.input';
import { productsCreateNestedManyWithoutCategoriesInput } from '../products/products-create-nested-many-without-categories.input';

@InputType()
export class categoriesCreateWithoutCategoriesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => categoriesCreateNestedManyWithoutCategoriesInput, {nullable:true})
    other_categories?: categoriesCreateNestedManyWithoutCategoriesInput;

    @Field(() => productsCreateNestedManyWithoutCategoriesInput, {nullable:true})
    products?: productsCreateNestedManyWithoutCategoriesInput;
}
