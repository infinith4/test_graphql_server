import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { categoriesUncheckedCreateNestedManyWithoutCategoriesInput } from './categories-unchecked-create-nested-many-without-categories.input';
import { productsUncheckedCreateNestedManyWithoutCategoriesInput } from '../products/products-unchecked-create-nested-many-without-categories.input';

@InputType()
export class categoriesUncheckedCreateWithoutCategoriesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => categoriesUncheckedCreateNestedManyWithoutCategoriesInput, {nullable:true})
    other_categories?: categoriesUncheckedCreateNestedManyWithoutCategoriesInput;

    @Field(() => productsUncheckedCreateNestedManyWithoutCategoriesInput, {nullable:true})
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput;
}
