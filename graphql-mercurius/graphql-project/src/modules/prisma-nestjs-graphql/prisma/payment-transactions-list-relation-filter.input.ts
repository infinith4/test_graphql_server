import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { payment_transactionsWhereInput } from '../payment-transactions/payment-transactions-where.input';

@InputType()
export class Payment_transactionsListRelationFilter {

    @Field(() => payment_transactionsWhereInput, {nullable:true})
    every?: payment_transactionsWhereInput;

    @Field(() => payment_transactionsWhereInput, {nullable:true})
    some?: payment_transactionsWhereInput;

    @Field(() => payment_transactionsWhereInput, {nullable:true})
    none?: payment_transactionsWhereInput;
}
