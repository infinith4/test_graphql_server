import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { paymentsCreateWithoutOrdersInput } from './payments-create-without-orders.input';
import { Type } from 'class-transformer';
import { paymentsCreateOrConnectWithoutOrdersInput } from './payments-create-or-connect-without-orders.input';
import { paymentsCreateManyOrdersInputEnvelope } from './payments-create-many-orders-input-envelope.input';
import { Prisma } from '@prisma/client';
import { paymentsWhereUniqueInput } from './payments-where-unique.input';

@InputType()
export class paymentsUncheckedCreateNestedManyWithoutOrdersInput {

    @Field(() => [paymentsCreateWithoutOrdersInput], {nullable:true})
    @Type(() => paymentsCreateWithoutOrdersInput)
    create?: Array<paymentsCreateWithoutOrdersInput>;

    @Field(() => [paymentsCreateOrConnectWithoutOrdersInput], {nullable:true})
    @Type(() => paymentsCreateOrConnectWithoutOrdersInput)
    connectOrCreate?: Array<paymentsCreateOrConnectWithoutOrdersInput>;

    @Field(() => paymentsCreateManyOrdersInputEnvelope, {nullable:true})
    @Type(() => paymentsCreateManyOrdersInputEnvelope)
    createMany?: paymentsCreateManyOrdersInputEnvelope;

    @Field(() => [paymentsWhereUniqueInput], {nullable:true})
    @Type(() => paymentsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<paymentsWhereUniqueInput, 'id'>>;
}
