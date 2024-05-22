import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { payment_transactionsWhereUniqueInput } from '../payment-transactions/payment-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { payment_transactionsCreateInput } from '../payment-transactions/payment-transactions-create.input';
import { payment_transactionsUpdateInput } from '../payment-transactions/payment-transactions-update.input';

@ArgsType()
export class UpsertOnepaymentTransactionsArgs {

    @Field(() => payment_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => payment_transactionsWhereUniqueInput)
    where!: payment_transactionsWhereUniqueInput;

    @Field(() => payment_transactionsCreateInput, {nullable:false})
    @Type(() => payment_transactionsCreateInput)
    create!: payment_transactionsCreateInput;

    @Field(() => payment_transactionsUpdateInput, {nullable:false})
    @Type(() => payment_transactionsUpdateInput)
    update!: payment_transactionsUpdateInput;
}
