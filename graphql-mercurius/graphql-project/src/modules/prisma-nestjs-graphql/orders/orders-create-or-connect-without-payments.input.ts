import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutPaymentsInput } from './orders-create-without-payments.input';

@InputType()
export class ordersCreateOrConnectWithoutPaymentsInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: Prisma.AtLeast<ordersWhereUniqueInput, 'id'>;

    @Field(() => ordersCreateWithoutPaymentsInput, {nullable:false})
    @Type(() => ordersCreateWithoutPaymentsInput)
    create!: ordersCreateWithoutPaymentsInput;
}
