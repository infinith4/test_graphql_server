import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { payment_transactionsUpdateInput } from '../payment-transactions/payment-transactions-update.input';
import { Type } from 'class-transformer';
import { payment_transactionsWhereUniqueInput } from '../payment-transactions/payment-transactions-where-unique.input';

@ArgsType()
export class UpdateOnepaymentTransactionsArgs {

    @Field(() => payment_transactionsUpdateInput, {nullable:false})
    @Type(() => payment_transactionsUpdateInput)
    data!: payment_transactionsUpdateInput;

    @Field(() => payment_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => payment_transactionsWhereUniqueInput)
    where!: payment_transactionsWhereUniqueInput;
}
