import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { categoriesCreateNestedOneWithoutOther_categoriesInput } from './categories-create-nested-one-without-other-categories.input';
import { categoriesCreateNestedManyWithoutCategoriesInput } from './categories-create-nested-many-without-categories.input';

@InputType()
export class categoriesCreateWithoutProductsInput {

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

    @Field(() => categoriesCreateNestedManyWithoutCategoriesInput, {nullable:true})
    other_categories?: categoriesCreateNestedManyWithoutCategoriesInput;
}
