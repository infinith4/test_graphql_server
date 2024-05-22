import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsWhereInput } from '../products/products-where.input';

@InputType()
export class ProductsListRelationFilter {

    @Field(() => productsWhereInput, {nullable:true})
    every?: productsWhereInput;

    @Field(() => productsWhereInput, {nullable:true})
    some?: productsWhereInput;

    @Field(() => productsWhereInput, {nullable:true})
    none?: productsWhereInput;
}
