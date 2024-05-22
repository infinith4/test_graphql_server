import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereInput } from './orders-where.input';
import { Type } from 'class-transformer';
import { ordersUpdateWithoutPayment_transactionsInput } from './orders-update-without-payment-transactions.input';

@InputType()
export class ordersUpdateToOneWithWhereWithoutPayment_transactionsInput {

    @Field(() => ordersWhereInput, {nullable:true})
    @Type(() => ordersWhereInput)
    where?: ordersWhereInput;

    @Field(() => ordersUpdateWithoutPayment_transactionsInput, {nullable:false})
    @Type(() => ordersUpdateWithoutPayment_transactionsInput)
    data!: ordersUpdateWithoutPayment_transactionsInput;
}
