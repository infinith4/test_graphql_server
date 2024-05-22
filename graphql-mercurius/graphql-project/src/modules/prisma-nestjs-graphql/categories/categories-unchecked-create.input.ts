import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { product_categoriesUncheckedCreateNestedManyWithoutCategoriesInput } from '../product-categories/product-categories-unchecked-create-nested-many-without-categories.input';
import { Type } from 'class-transformer';

@InputType()
export class categoriesUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => product_categoriesUncheckedCreateNestedManyWithoutCategoriesInput, {nullable:true})
    @Type(() => product_categoriesUncheckedCreateNestedManyWithoutCategoriesInput)
    product_categories?: product_categoriesUncheckedCreateNestedManyWithoutCategoriesInput;
}
