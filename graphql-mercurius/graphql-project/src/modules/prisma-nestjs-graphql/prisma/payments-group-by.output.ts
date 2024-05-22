import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { PaymentsCountAggregate } from './payments-count-aggregate.output';
import { PaymentsAvgAggregate } from './payments-avg-aggregate.output';
import { PaymentsSumAggregate } from './payments-sum-aggregate.output';
import { PaymentsMinAggregate } from './payments-min-aggregate.output';
import { PaymentsMaxAggregate } from './payments-max-aggregate.output';

@ObjectType()
export class PaymentsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    order_id?: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: Decimal;

    @Field(() => String, {nullable:false})
    payment_method!: string;

    @Field(() => String, {nullable:false})
    payment_status!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => PaymentsCountAggregate, {nullable:true})
    _count?: PaymentsCountAggregate;

    @Field(() => PaymentsAvgAggregate, {nullable:true})
    _avg?: PaymentsAvgAggregate;

    @Field(() => PaymentsSumAggregate, {nullable:true})
    _sum?: PaymentsSumAggregate;

    @Field(() => PaymentsMinAggregate, {nullable:true})
    _min?: PaymentsMinAggregate;

    @Field(() => PaymentsMaxAggregate, {nullable:true})
    _max?: PaymentsMaxAggregate;
}
