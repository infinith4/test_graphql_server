import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersUpdateWithoutUsersInput } from './orders-update-without-users.input';

@InputType()
export class ordersUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: Prisma.AtLeast<ordersWhereUniqueInput, 'id'>;

    @Field(() => ordersUpdateWithoutUsersInput, {nullable:false})
    @Type(() => ordersUpdateWithoutUsersInput)
    data!: ordersUpdateWithoutUsersInput;
}
