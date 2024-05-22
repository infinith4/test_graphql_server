import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsWhereInput } from '../products/products-where.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductsNullableRelationFilter {

    @Field(() => productsWhereInput, {nullable:true})
    @Type(() => productsWhereInput)
    is?: productsWhereInput;

    @Field(() => productsWhereInput, {nullable:true})
    @Type(() => productsWhereInput)
    isNot?: productsWhereInput;
}
