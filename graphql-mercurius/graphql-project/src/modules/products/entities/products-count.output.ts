import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductsCount {

    @Field(() => Int, {nullable:false})
    cart_items!: number;

    @Field(() => Int, {nullable:false})
    order_items!: number;

    @Field(() => Int, {nullable:false})
    product_categories!: number;
}
