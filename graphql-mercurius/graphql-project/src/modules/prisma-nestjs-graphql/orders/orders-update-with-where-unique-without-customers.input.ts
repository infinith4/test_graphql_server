import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersUpdateWithoutCustomersInput } from './orders-update-without-customers.input';

@InputType()
export class ordersUpdateWithWhereUniqueWithoutCustomersInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: Prisma.AtLeast<ordersWhereUniqueInput, 'id'>;

    @Field(() => ordersUpdateWithoutCustomersInput, {nullable:false})
    @Type(() => ordersUpdateWithoutCustomersInput)
    data!: ordersUpdateWithoutCustomersInput;
}
