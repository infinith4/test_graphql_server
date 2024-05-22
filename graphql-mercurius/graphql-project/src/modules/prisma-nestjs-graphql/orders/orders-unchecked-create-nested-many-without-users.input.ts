import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutUsersInput } from './orders-create-without-users.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutUsersInput } from './orders-create-or-connect-without-users.input';
import { ordersCreateManyUsersInputEnvelope } from './orders-create-many-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ordersWhereUniqueInput } from './orders-where-unique.input';

@InputType()
export class ordersUncheckedCreateNestedManyWithoutUsersInput {

    @Field(() => [ordersCreateWithoutUsersInput], {nullable:true})
    @Type(() => ordersCreateWithoutUsersInput)
    create?: Array<ordersCreateWithoutUsersInput>;

    @Field(() => [ordersCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<ordersCreateOrConnectWithoutUsersInput>;

    @Field(() => ordersCreateManyUsersInputEnvelope, {nullable:true})
    @Type(() => ordersCreateManyUsersInputEnvelope)
    createMany?: ordersCreateManyUsersInputEnvelope;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ordersWhereUniqueInput, 'id'>>;
}
