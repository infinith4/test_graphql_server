import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class Order_itemsAvgAggregate {

    @Field(() => Float, {nullable:true})
    order_id?: number;

    @Field(() => Float, {nullable:true})
    product_id?: number;

    @Field(() => Float, {nullable:true})
    quantity?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    price?: Decimal;
}
