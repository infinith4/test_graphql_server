import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ordersCreateNestedOneWithoutPayment_transactionsInput } from '../orders/orders-create-nested-one-without-payment-transactions.input';

@InputType()
export class payment_transactionsCreateInput {

    @Field(() => Int, {nullable:true})
    amount?: number;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:false})
    payment_method!: string;

    @Field(() => String, {nullable:false})
    transaction_id!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ordersCreateNestedOneWithoutPayment_transactionsInput, {nullable:false})
    orders!: ordersCreateNestedOneWithoutPayment_transactionsInput;
}
