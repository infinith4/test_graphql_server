import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutCustomersInput } from './orders-create-without-customers.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutCustomersInput } from './orders-create-or-connect-without-customers.input';
import { ordersCreateManyCustomersInputEnvelope } from './orders-create-many-customers-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ordersWhereUniqueInput } from './orders-where-unique.input';

@InputType()
export class ordersUncheckedCreateNestedManyWithoutCustomersInput {

    @Field(() => [ordersCreateWithoutCustomersInput], {nullable:true})
    @Type(() => ordersCreateWithoutCustomersInput)
    create?: Array<ordersCreateWithoutCustomersInput>;

    @Field(() => [ordersCreateOrConnectWithoutCustomersInput], {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutCustomersInput)
    connectOrCreate?: Array<ordersCreateOrConnectWithoutCustomersInput>;

    @Field(() => ordersCreateManyCustomersInputEnvelope, {nullable:true})
    @Type(() => ordersCreateManyCustomersInputEnvelope)
    createMany?: ordersCreateManyCustomersInputEnvelope;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ordersWhereUniqueInput, 'id'>>;
}
