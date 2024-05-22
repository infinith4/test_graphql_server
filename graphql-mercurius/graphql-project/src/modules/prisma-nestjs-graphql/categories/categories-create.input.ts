import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { product_categoriesCreateNestedManyWithoutCategoriesInput } from '../product-categories/product-categories-create-nested-many-without-categories.input';
import { Type } from 'class-transformer';

@InputType()
export class categoriesCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => product_categoriesCreateNestedManyWithoutCategoriesInput, {nullable:true})
    @Type(() => product_categoriesCreateNestedManyWithoutCategoriesInput)
    product_categories?: product_categoriesCreateNestedManyWithoutCategoriesInput;
}
