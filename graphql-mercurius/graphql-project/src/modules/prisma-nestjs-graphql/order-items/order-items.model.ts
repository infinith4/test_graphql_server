import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { orders } from '../orders/orders.model';
import { products } from '../products/products.model';

@ObjectType()
export class order_items {

    @Field(() => Int, {nullable:false})
    order_id!: number;

    @Field(() => Int, {nullable:false})
    product_id!: number;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;

    @Field(() => Date, {nullable:true})
    created_at!: Date | null;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;

    @Field(() => orders, {nullable:false})
    orders?: orders;

    @Field(() => products, {nullable:false})
    products?: products;
}
