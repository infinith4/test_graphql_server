import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersUpdateWithoutPayment_transactionsInput } from './orders-update-without-payment-transactions.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutPayment_transactionsInput } from './orders-create-without-payment-transactions.input';
import { ordersWhereInput } from './orders-where.input';

@InputType()
export class ordersUpsertWithoutPayment_transactionsInput {

    @Field(() => ordersUpdateWithoutPayment_transactionsInput, {nullable:false})
    @Type(() => ordersUpdateWithoutPayment_transactionsInput)
    update!: ordersUpdateWithoutPayment_transactionsInput;

    @Field(() => ordersCreateWithoutPayment_transactionsInput, {nullable:false})
    @Type(() => ordersCreateWithoutPayment_transactionsInput)
    create!: ordersCreateWithoutPayment_transactionsInput;

    @Field(() => ordersWhereInput, {nullable:true})
    @Type(() => ordersWhereInput)
    where?: ordersWhereInput;
}
