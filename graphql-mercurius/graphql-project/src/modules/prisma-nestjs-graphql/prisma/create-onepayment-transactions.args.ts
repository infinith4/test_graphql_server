import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { payment_transactionsCreateInput } from '../payment-transactions/payment-transactions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepaymentTransactionsArgs {

    @Field(() => payment_transactionsCreateInput, {nullable:false})
    @Type(() => payment_transactionsCreateInput)
    data!: payment_transactionsCreateInput;
}
