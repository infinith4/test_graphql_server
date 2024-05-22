import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class Order_itemsSumAggregate {

    @Field(() => Int, {nullable:true})
    order_id?: number;

    @Field(() => Int, {nullable:true})
    product_id?: number;

    @Field(() => Int, {nullable:true})
    quantity?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    price?: Decimal;
}
