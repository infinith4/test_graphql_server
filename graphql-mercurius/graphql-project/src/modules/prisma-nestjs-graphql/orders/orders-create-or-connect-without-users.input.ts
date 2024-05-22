import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutUsersInput } from './orders-create-without-users.input';

@InputType()
export class ordersCreateOrConnectWithoutUsersInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: Prisma.AtLeast<ordersWhereUniqueInput, 'id'>;

    @Field(() => ordersCreateWithoutUsersInput, {nullable:false})
    @Type(() => ordersCreateWithoutUsersInput)
    create!: ordersCreateWithoutUsersInput;
}
