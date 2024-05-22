import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Order_itemsCountAggregate } from './order-items-count-aggregate.output';
import { Order_itemsAvgAggregate } from './order-items-avg-aggregate.output';
import { Order_itemsSumAggregate } from './order-items-sum-aggregate.output';
import { Order_itemsMinAggregate } from './order-items-min-aggregate.output';
import { Order_itemsMaxAggregate } from './order-items-max-aggregate.output';

@ObjectType()
export class Order_itemsGroupBy {

    @Field(() => Int, {nullable:false})
    order_id!: number;

    @Field(() => Int, {nullable:false})
    product_id!: number;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Order_itemsCountAggregate, {nullable:true})
    _count?: Order_itemsCountAggregate;

    @Field(() => Order_itemsAvgAggregate, {nullable:true})
    _avg?: Order_itemsAvgAggregate;

    @Field(() => Order_itemsSumAggregate, {nullable:true})
    _sum?: Order_itemsSumAggregate;

    @Field(() => Order_itemsMinAggregate, {nullable:true})
    _min?: Order_itemsMinAggregate;

    @Field(() => Order_itemsMaxAggregate, {nullable:true})
    _max?: Order_itemsMaxAggregate;
}
