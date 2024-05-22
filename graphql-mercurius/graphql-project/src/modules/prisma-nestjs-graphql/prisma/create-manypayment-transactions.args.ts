import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { payment_transactionsCreateManyInput } from '../payment-transactions/payment-transactions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManypaymentTransactionsArgs {

    @Field(() => [payment_transactionsCreateManyInput], {nullable:false})
    @Type(() => payment_transactionsCreateManyInput)
    data!: Array<payment_transactionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
