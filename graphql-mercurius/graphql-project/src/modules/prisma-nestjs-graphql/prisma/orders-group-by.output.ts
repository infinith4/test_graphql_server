import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { orders_status } from './orders-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { OrdersCountAggregate } from './orders-count-aggregate.output';
import { OrdersAvgAggregate } from './orders-avg-aggregate.output';
import { OrdersSumAggregate } from './orders-sum-aggregate.output';
import { OrdersMinAggregate } from './orders-min-aggregate.output';
import { OrdersMaxAggregate } from './orders-max-aggregate.output';

@ObjectType()
export class OrdersGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    user_id?: number;

    @Field(() => orders_status, {nullable:false})
    status!: keyof typeof orders_status;

    @Field(() => GraphQLDecimal, {nullable:false})
    total!: Decimal;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => OrdersCountAggregate, {nullable:true})
    _count?: OrdersCountAggregate;

    @Field(() => OrdersAvgAggregate, {nullable:true})
    _avg?: OrdersAvgAggregate;

    @Field(() => OrdersSumAggregate, {nullable:true})
    _sum?: OrdersSumAggregate;

    @Field(() => OrdersMinAggregate, {nullable:true})
    _min?: OrdersMinAggregate;

    @Field(() => OrdersMaxAggregate, {nullable:true})
    _max?: OrdersMaxAggregate;
}
