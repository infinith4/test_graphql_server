import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutPaymentsInput } from './orders-create-without-payments.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutPaymentsInput } from './orders-create-or-connect-without-payments.input';
import { Prisma } from '@prisma/client';
import { ordersWhereUniqueInput } from './orders-where-unique.input';

@InputType()
export class ordersCreateNestedOneWithoutPaymentsInput {

    @Field(() => ordersCreateWithoutPaymentsInput, {nullable:true})
    @Type(() => ordersCreateWithoutPaymentsInput)
    create?: ordersCreateWithoutPaymentsInput;

    @Field(() => ordersCreateOrConnectWithoutPaymentsInput, {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutPaymentsInput)
    connectOrCreate?: ordersCreateOrConnectWithoutPaymentsInput;

    @Field(() => ordersWhereUniqueInput, {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: Prisma.AtLeast<ordersWhereUniqueInput, 'id'>;
}
