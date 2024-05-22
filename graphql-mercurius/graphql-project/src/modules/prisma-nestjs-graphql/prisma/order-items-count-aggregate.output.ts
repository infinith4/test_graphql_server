import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Order_itemsCountAggregate {

    @Field(() => Int, {nullable:false})
    order_id!: number;

    @Field(() => Int, {nullable:false})
    product_id!: number;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
