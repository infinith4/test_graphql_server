import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutCustomersInput } from './orders-create-without-customers.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutCustomersInput } from './orders-create-or-connect-without-customers.input';
import { ordersUpsertWithWhereUniqueWithoutCustomersInput } from './orders-upsert-with-where-unique-without-customers.input';
import { ordersCreateManyCustomersInputEnvelope } from './orders-create-many-customers-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { ordersUpdateWithWhereUniqueWithoutCustomersInput } from './orders-update-with-where-unique-without-customers.input';
import { ordersUpdateManyWithWhereWithoutCustomersInput } from './orders-update-many-with-where-without-customers.input';
import { ordersScalarWhereInput } from './orders-scalar-where.input';

@InputType()
export class ordersUpdateManyWithoutCustomersNestedInput {

    @Field(() => [ordersCreateWithoutCustomersInput], {nullable:true})
    @Type(() => ordersCreateWithoutCustomersInput)
    create?: Array<ordersCreateWithoutCustomersInput>;

    @Field(() => [ordersCreateOrConnectWithoutCustomersInput], {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutCustomersInput)
    connectOrCreate?: Array<ordersCreateOrConnectWithoutCustomersInput>;

    @Field(() => [ordersUpsertWithWhereUniqueWithoutCustomersInput], {nullable:true})
    @Type(() => ordersUpsertWithWhereUniqueWithoutCustomersInput)
    upsert?: Array<ordersUpsertWithWhereUniqueWithoutCustomersInput>;

    @Field(() => ordersCreateManyCustomersInputEnvelope, {nullable:true})
    @Type(() => ordersCreateManyCustomersInputEnvelope)
    createMany?: ordersCreateManyCustomersInputEnvelope;

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

    @Field(() => [ordersUpdateWithWhereUniqueWithoutCustomersInput], {nullable:true})
    @Type(() => ordersUpdateWithWhereUniqueWithoutCustomersInput)
    update?: Array<ordersUpdateWithWhereUniqueWithoutCustomersInput>;

    @Field(() => [ordersUpdateManyWithWhereWithoutCustomersInput], {nullable:true})
    @Type(() => ordersUpdateManyWithWhereWithoutCustomersInput)
    updateMany?: Array<ordersUpdateManyWithWhereWithoutCustomersInput>;

    @Field(() => [ordersScalarWhereInput], {nullable:true})
    @Type(() => ordersScalarWhereInput)
    deleteMany?: Array<ordersScalarWhereInput>;
}
