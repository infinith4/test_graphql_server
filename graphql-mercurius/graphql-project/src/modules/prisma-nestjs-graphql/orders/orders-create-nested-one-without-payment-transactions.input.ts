import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutPayment_transactionsInput } from './orders-create-without-payment-transactions.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutPayment_transactionsInput } from './orders-create-or-connect-without-payment-transactions.input';
import { Prisma } from '@prisma/client';
import { ordersWhereUniqueInput } from './orders-where-unique.input';

@InputType()
export class ordersCreateNestedOneWithoutPayment_transactionsInput {

    @Field(() => ordersCreateWithoutPayment_transactionsInput, {nullable:true})
    @Type(() => ordersCreateWithoutPayment_transactionsInput)
    create?: ordersCreateWithoutPayment_transactionsInput;

    @Field(() => ordersCreateOrConnectWithoutPayment_transactionsInput, {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutPayment_transactionsInput)
    connectOrCreate?: ordersCreateOrConnectWithoutPayment_transactionsInput;

    @Field(() => ordersWhereUniqueInput, {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: Prisma.AtLeast<ordersWhereUniqueInput, 'id'>;
}
