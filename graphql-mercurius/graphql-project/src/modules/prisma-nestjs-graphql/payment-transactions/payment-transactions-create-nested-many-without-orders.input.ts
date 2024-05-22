import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { payment_transactionsCreateWithoutOrdersInput } from './payment-transactions-create-without-orders.input';
import { Type } from 'class-transformer';
import { payment_transactionsCreateOrConnectWithoutOrdersInput } from './payment-transactions-create-or-connect-without-orders.input';
import { payment_transactionsCreateManyOrdersInputEnvelope } from './payment-transactions-create-many-orders-input-envelope.input';
import { Prisma } from '@prisma/client';
import { payment_transactionsWhereUniqueInput } from './payment-transactions-where-unique.input';

@InputType()
export class payment_transactionsCreateNestedManyWithoutOrdersInput {

    @Field(() => [payment_transactionsCreateWithoutOrdersInput], {nullable:true})
    @Type(() => payment_transactionsCreateWithoutOrdersInput)
    create?: Array<payment_transactionsCreateWithoutOrdersInput>;

    @Field(() => [payment_transactionsCreateOrConnectWithoutOrdersInput], {nullable:true})
    @Type(() => payment_transactionsCreateOrConnectWithoutOrdersInput)
    connectOrCreate?: Array<payment_transactionsCreateOrConnectWithoutOrdersInput>;

    @Field(() => payment_transactionsCreateManyOrdersInputEnvelope, {nullable:true})
    @Type(() => payment_transactionsCreateManyOrdersInputEnvelope)
    createMany?: payment_transactionsCreateManyOrdersInputEnvelope;

    @Field(() => [payment_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => payment_transactionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<payment_transactionsWhereUniqueInput, 'id'>>;
}
