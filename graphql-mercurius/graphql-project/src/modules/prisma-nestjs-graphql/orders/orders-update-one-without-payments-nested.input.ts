import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutPaymentsInput } from './orders-create-without-payments.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutPaymentsInput } from './orders-create-or-connect-without-payments.input';
import { ordersUpsertWithoutPaymentsInput } from './orders-upsert-without-payments.input';
import { ordersWhereInput } from './orders-where.input';
import { Prisma } from '@prisma/client';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { ordersUpdateToOneWithWhereWithoutPaymentsInput } from './orders-update-to-one-with-where-without-payments.input';

@InputType()
export class ordersUpdateOneWithoutPaymentsNestedInput {

    @Field(() => ordersCreateWithoutPaymentsInput, {nullable:true})
    @Type(() => ordersCreateWithoutPaymentsInput)
    create?: ordersCreateWithoutPaymentsInput;

    @Field(() => ordersCreateOrConnectWithoutPaymentsInput, {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutPaymentsInput)
    connectOrCreate?: ordersCreateOrConnectWithoutPaymentsInput;

    @Field(() => ordersUpsertWithoutPaymentsInput, {nullable:true})
    @Type(() => ordersUpsertWithoutPaymentsInput)
    upsert?: ordersUpsertWithoutPaymentsInput;

    @Field(() => ordersWhereInput, {nullable:true})
    @Type(() => ordersWhereInput)
    disconnect?: ordersWhereInput;

    @Field(() => ordersWhereInput, {nullable:true})
    @Type(() => ordersWhereInput)
    delete?: ordersWhereInput;

    @Field(() => ordersWhereUniqueInput, {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: Prisma.AtLeast<ordersWhereUniqueInput, 'id'>;

    @Field(() => ordersUpdateToOneWithWhereWithoutPaymentsInput, {nullable:true})
    @Type(() => ordersUpdateToOneWithWhereWithoutPaymentsInput)
    update?: ordersUpdateToOneWithWhereWithoutPaymentsInput;
}
