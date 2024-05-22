import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { payment_transactionsWhereUniqueInput } from '../payment-transactions/payment-transactions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquepaymentTransactionsArgs {

    @Field(() => payment_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => payment_transactionsWhereUniqueInput)
    where!: payment_transactionsWhereUniqueInput;
}
