import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { payment_transactionsUpdateManyMutationInput } from '../payment-transactions/payment-transactions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { payment_transactionsWhereInput } from '../payment-transactions/payment-transactions-where.input';

@ArgsType()
export class UpdateManypaymentTransactionsArgs {

    @Field(() => payment_transactionsUpdateManyMutationInput, {nullable:false})
    @Type(() => payment_transactionsUpdateManyMutationInput)
    data!: payment_transactionsUpdateManyMutationInput;

    @Field(() => payment_transactionsWhereInput, {nullable:true})
    @Type(() => payment_transactionsWhereInput)
    where?: payment_transactionsWhereInput;
}
