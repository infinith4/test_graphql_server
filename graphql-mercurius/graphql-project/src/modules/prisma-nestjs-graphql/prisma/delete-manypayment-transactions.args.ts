import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { payment_transactionsWhereInput } from '../payment-transactions/payment-transactions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypaymentTransactionsArgs {

    @Field(() => payment_transactionsWhereInput, {nullable:true})
    @Type(() => payment_transactionsWhereInput)
    where?: payment_transactionsWhereInput;
}
