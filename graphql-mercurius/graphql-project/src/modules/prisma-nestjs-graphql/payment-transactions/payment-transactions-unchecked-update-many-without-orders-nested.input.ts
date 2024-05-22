import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { payment_transactionsCreateWithoutOrdersInput } from './payment-transactions-create-without-orders.input';
import { Type } from 'class-transformer';
import { payment_transactionsCreateOrConnectWithoutOrdersInput } from './payment-transactions-create-or-connect-without-orders.input';
import { payment_transactionsUpsertWithWhereUniqueWithoutOrdersInput } from './payment-transactions-upsert-with-where-unique-without-orders.input';
import { payment_transactionsCreateManyOrdersInputEnvelope } from './payment-transactions-create-many-orders-input-envelope.input';
import { Prisma } from '@prisma/client';
import { payment_transactionsWhereUniqueInput } from './payment-transactions-where-unique.input';
import { payment_transactionsUpdateWithWhereUniqueWithoutOrdersInput } from './payment-transactions-update-with-where-unique-without-orders.input';
import { payment_transactionsUpdateManyWithWhereWithoutOrdersInput } from './payment-transactions-update-many-with-where-without-orders.input';
import { payment_transactionsScalarWhereInput } from './payment-transactions-scalar-where.input';

@InputType()
export class payment_transactionsUncheckedUpdateManyWithoutOrdersNestedInput {

    @Field(() => [payment_transactionsCreateWithoutOrdersInput], {nullable:true})
    @Type(() => payment_transactionsCreateWithoutOrdersInput)
    create?: Array<payment_transactionsCreateWithoutOrdersInput>;

    @Field(() => [payment_transactionsCreateOrConnectWithoutOrdersInput], {nullable:true})
    @Type(() => payment_transactionsCreateOrConnectWithoutOrdersInput)
    connectOrCreate?: Array<payment_transactionsCreateOrConnectWithoutOrdersInput>;

    @Field(() => [payment_transactionsUpsertWithWhereUniqueWithoutOrdersInput], {nullable:true})
    @Type(() => payment_transactionsUpsertWithWhereUniqueWithoutOrdersInput)
    upsert?: Array<payment_transactionsUpsertWithWhereUniqueWithoutOrdersInput>;

    @Field(() => payment_transactionsCreateManyOrdersInputEnvelope, {nullable:true})
    @Type(() => payment_transactionsCreateManyOrdersInputEnvelope)
    createMany?: payment_transactionsCreateManyOrdersInputEnvelope;

    @Field(() => [payment_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => payment_transactionsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<payment_transactionsWhereUniqueInput, 'id'>>;

    @Field(() => [payment_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => payment_transactionsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<payment_transactionsWhereUniqueInput, 'id'>>;

    @Field(() => [payment_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => payment_transactionsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<payment_transactionsWhereUniqueInput, 'id'>>;

    @Field(() => [payment_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => payment_transactionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<payment_transactionsWhereUniqueInput, 'id'>>;

    @Field(() => [payment_transactionsUpdateWithWhereUniqueWithoutOrdersInput], {nullable:true})
    @Type(() => payment_transactionsUpdateWithWhereUniqueWithoutOrdersInput)
    update?: Array<payment_transactionsUpdateWithWhereUniqueWithoutOrdersInput>;

    @Field(() => [payment_transactionsUpdateManyWithWhereWithoutOrdersInput], {nullable:true})
    @Type(() => payment_transactionsUpdateManyWithWhereWithoutOrdersInput)
    updateMany?: Array<payment_transactionsUpdateManyWithWhereWithoutOrdersInput>;

    @Field(() => [payment_transactionsScalarWhereInput], {nullable:true})
    @Type(() => payment_transactionsScalarWhereInput)
    deleteMany?: Array<payment_transactionsScalarWhereInput>;
}
