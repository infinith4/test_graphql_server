import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Payment_transactionsCountAggregate } from './payment-transactions-count-aggregate.output';
import { Payment_transactionsAvgAggregate } from './payment-transactions-avg-aggregate.output';
import { Payment_transactionsSumAggregate } from './payment-transactions-sum-aggregate.output';
import { Payment_transactionsMinAggregate } from './payment-transactions-min-aggregate.output';
import { Payment_transactionsMaxAggregate } from './payment-transactions-max-aggregate.output';

@ObjectType()
export class AggregatePayment_transactions {

    @Field(() => Payment_transactionsCountAggregate, {nullable:true})
    _count?: Payment_transactionsCountAggregate;

    @Field(() => Payment_transactionsAvgAggregate, {nullable:true})
    _avg?: Payment_transactionsAvgAggregate;

    @Field(() => Payment_transactionsSumAggregate, {nullable:true})
    _sum?: Payment_transactionsSumAggregate;

    @Field(() => Payment_transactionsMinAggregate, {nullable:true})
    _min?: Payment_transactionsMinAggregate;

    @Field(() => Payment_transactionsMaxAggregate, {nullable:true})
    _max?: Payment_transactionsMaxAggregate;
}
