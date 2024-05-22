import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutPayment_transactionsInput } from './orders-create-without-payment-transactions.input';

@InputType()
export class ordersCreateOrConnectWithoutPayment_transactionsInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: Prisma.AtLeast<ordersWhereUniqueInput, 'id'>;

    @Field(() => ordersCreateWithoutPayment_transactionsInput, {nullable:false})
    @Type(() => ordersCreateWithoutPayment_transactionsInput)
    create!: ordersCreateWithoutPayment_transactionsInput;
}
