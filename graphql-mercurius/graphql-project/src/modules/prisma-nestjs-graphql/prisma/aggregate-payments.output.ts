import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PaymentsCountAggregate } from './payments-count-aggregate.output';
import { PaymentsAvgAggregate } from './payments-avg-aggregate.output';
import { PaymentsSumAggregate } from './payments-sum-aggregate.output';
import { PaymentsMinAggregate } from './payments-min-aggregate.output';
import { PaymentsMaxAggregate } from './payments-max-aggregate.output';

@ObjectType()
export class AggregatePayments {

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
