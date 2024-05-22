import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { categoriesUncheckedCreateNestedManyWithoutCategoriesInput } from './categories-unchecked-create-nested-many-without-categories.input';

@InputType()
export class categoriesUncheckedCreateWithoutProductsInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    parent_id?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => categoriesUncheckedCreateNestedManyWithoutCategoriesInput, {nullable:true})
    other_categories?: categoriesUncheckedCreateNestedManyWithoutCategoriesInput;
}
