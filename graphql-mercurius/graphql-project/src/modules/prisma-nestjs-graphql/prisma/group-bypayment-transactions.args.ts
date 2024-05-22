import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { payment_transactionsWhereInput } from '../payment-transactions/payment-transactions-where.input';
import { Type } from 'class-transformer';
import { payment_transactionsOrderByWithAggregationInput } from '../payment-transactions/payment-transactions-order-by-with-aggregation.input';
import { Payment_transactionsScalarFieldEnum } from './payment-transactions-scalar-field.enum';
import { payment_transactionsScalarWhereWithAggregatesInput } from '../payment-transactions/payment-transactions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypaymentTransactionsArgs {

    @Field(() => payment_transactionsWhereInput, {nullable:true})
    @Type(() => payment_transactionsWhereInput)
    where?: payment_transactionsWhereInput;

    @Field(() => [payment_transactionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<payment_transactionsOrderByWithAggregationInput>;

    @Field(() => [Payment_transactionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Payment_transactionsScalarFieldEnum>;

    @Field(() => payment_transactionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: payment_transactionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
