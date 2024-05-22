import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { paymentsCreateWithoutOrdersInput } from './payments-create-without-orders.input';
import { Type } from 'class-transformer';
import { paymentsCreateOrConnectWithoutOrdersInput } from './payments-create-or-connect-without-orders.input';
import { paymentsUpsertWithWhereUniqueWithoutOrdersInput } from './payments-upsert-with-where-unique-without-orders.input';
import { paymentsCreateManyOrdersInputEnvelope } from './payments-create-many-orders-input-envelope.input';
import { Prisma } from '@prisma/client';
import { paymentsWhereUniqueInput } from './payments-where-unique.input';
import { paymentsUpdateWithWhereUniqueWithoutOrdersInput } from './payments-update-with-where-unique-without-orders.input';
import { paymentsUpdateManyWithWhereWithoutOrdersInput } from './payments-update-many-with-where-without-orders.input';
import { paymentsScalarWhereInput } from './payments-scalar-where.input';

@InputType()
export class paymentsUpdateManyWithoutOrdersNestedInput {

    @Field(() => [paymentsCreateWithoutOrdersInput], {nullable:true})
    @Type(() => paymentsCreateWithoutOrdersInput)
    create?: Array<paymentsCreateWithoutOrdersInput>;

    @Field(() => [paymentsCreateOrConnectWithoutOrdersInput], {nullable:true})
    @Type(() => paymentsCreateOrConnectWithoutOrdersInput)
    connectOrCreate?: Array<paymentsCreateOrConnectWithoutOrdersInput>;

    @Field(() => [paymentsUpsertWithWhereUniqueWithoutOrdersInput], {nullable:true})
    @Type(() => paymentsUpsertWithWhereUniqueWithoutOrdersInput)
    upsert?: Array<paymentsUpsertWithWhereUniqueWithoutOrdersInput>;

    @Field(() => paymentsCreateManyOrdersInputEnvelope, {nullable:true})
    @Type(() => paymentsCreateManyOrdersInputEnvelope)
    createMany?: paymentsCreateManyOrdersInputEnvelope;

    @Field(() => [paymentsWhereUniqueInput], {nullable:true})
    @Type(() => paymentsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<paymentsWhereUniqueInput, 'id'>>;

    @Field(() => [paymentsWhereUniqueInput], {nullable:true})
    @Type(() => paymentsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<paymentsWhereUniqueInput, 'id'>>;

    @Field(() => [paymentsWhereUniqueInput], {nullable:true})
    @Type(() => paymentsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<paymentsWhereUniqueInput, 'id'>>;

    @Field(() => [paymentsWhereUniqueInput], {nullable:true})
    @Type(() => paymentsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<paymentsWhereUniqueInput, 'id'>>;

    @Field(() => [paymentsUpdateWithWhereUniqueWithoutOrdersInput], {nullable:true})
    @Type(() => paymentsUpdateWithWhereUniqueWithoutOrdersInput)
    update?: Array<paymentsUpdateWithWhereUniqueWithoutOrdersInput>;

    @Field(() => [paymentsUpdateManyWithWhereWithoutOrdersInput], {nullable:true})
    @Type(() => paymentsUpdateManyWithWhereWithoutOrdersInput)
    updateMany?: Array<paymentsUpdateManyWithWhereWithoutOrdersInput>;

    @Field(() => [paymentsScalarWhereInput], {nullable:true})
    @Type(() => paymentsScalarWhereInput)
    deleteMany?: Array<paymentsScalarWhereInput>;
}
