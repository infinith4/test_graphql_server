import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { payment_transactionsScalarWhereInput } from './payment-transactions-scalar-where.input';
import { Type } from 'class-transformer';
import { payment_transactionsUpdateManyMutationInput } from './payment-transactions-update-many-mutation.input';

@InputType()
export class payment_transactionsUpdateManyWithWhereWithoutOrdersInput {

    @Field(() => payment_transactionsScalarWhereInput, {nullable:false})
    @Type(() => payment_transactionsScalarWhereInput)
    where!: payment_transactionsScalarWhereInput;

    @Field(() => payment_transactionsUpdateManyMutationInput, {nullable:false})
    @Type(() => payment_transactionsUpdateManyMutationInput)
    data!: payment_transactionsUpdateManyMutationInput;
}
