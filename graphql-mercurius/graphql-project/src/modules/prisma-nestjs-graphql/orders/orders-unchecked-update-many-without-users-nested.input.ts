import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutUsersInput } from './orders-create-without-users.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutUsersInput } from './orders-create-or-connect-without-users.input';
import { ordersUpsertWithWhereUniqueWithoutUsersInput } from './orders-upsert-with-where-unique-without-users.input';
import { ordersCreateManyUsersInputEnvelope } from './orders-create-many-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { ordersUpdateWithWhereUniqueWithoutUsersInput } from './orders-update-with-where-unique-without-users.input';
import { ordersUpdateManyWithWhereWithoutUsersInput } from './orders-update-many-with-where-without-users.input';
import { ordersScalarWhereInput } from './orders-scalar-where.input';

@InputType()
export class ordersUncheckedUpdateManyWithoutUsersNestedInput {

    @Field(() => [ordersCreateWithoutUsersInput], {nullable:true})
    @Type(() => ordersCreateWithoutUsersInput)
    create?: Array<ordersCreateWithoutUsersInput>;

    @Field(() => [ordersCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<ordersCreateOrConnectWithoutUsersInput>;

    @Field(() => [ordersUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => ordersUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<ordersUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => ordersCreateManyUsersInputEnvelope, {nullable:true})
    @Type(() => ordersCreateManyUsersInputEnvelope)
    createMany?: ordersCreateManyUsersInputEnvelope;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ordersWhereUniqueInput, 'id'>>;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ordersWhereUniqueInput, 'id'>>;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ordersWhereUniqueInput, 'id'>>;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ordersWhereUniqueInput, 'id'>>;

    @Field(() => [ordersUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => ordersUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<ordersUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [ordersUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => ordersUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<ordersUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [ordersScalarWhereInput], {nullable:true})
    @Type(() => ordersScalarWhereInput)
    deleteMany?: Array<ordersScalarWhereInput>;
}
