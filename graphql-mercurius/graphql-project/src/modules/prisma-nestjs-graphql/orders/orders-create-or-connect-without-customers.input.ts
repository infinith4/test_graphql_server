import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutCustomersInput } from './orders-create-without-customers.input';

@InputType()
export class ordersCreateOrConnectWithoutCustomersInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: Prisma.AtLeast<ordersWhereUniqueInput, 'id'>;

    @Field(() => ordersCreateWithoutCustomersInput, {nullable:false})
    @Type(() => ordersCreateWithoutCustomersInput)
    create!: ordersCreateWithoutCustomersInput;
}
