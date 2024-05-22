import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { payment_transactionsCreateManyOrdersInput } from './payment-transactions-create-many-orders.input';
import { Type } from 'class-transformer';

@InputType()
export class payment_transactionsCreateManyOrdersInputEnvelope {

    @Field(() => [payment_transactionsCreateManyOrdersInput], {nullable:false})
    @Type(() => payment_transactionsCreateManyOrdersInput)
    data!: Array<payment_transactionsCreateManyOrdersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
