import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { product_categoriesWhereInput } from '../product-categories/product-categories-where.input';

@InputType()
export class Product_categoriesListRelationFilter {

    @Field(() => product_categoriesWhereInput, {nullable:true})
    every?: product_categoriesWhereInput;

    @Field(() => product_categoriesWhereInput, {nullable:true})
    some?: product_categoriesWhereInput;

    @Field(() => product_categoriesWhereInput, {nullable:true})
    none?: product_categoriesWhereInput;
}
