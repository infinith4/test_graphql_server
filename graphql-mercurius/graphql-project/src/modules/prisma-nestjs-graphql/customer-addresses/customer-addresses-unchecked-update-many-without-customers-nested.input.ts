import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customer_addressesCreateWithoutCustomersInput } from './customer-addresses-create-without-customers.input';
import { Type } from 'class-transformer';
import { customer_addressesCreateOrConnectWithoutCustomersInput } from './customer-addresses-create-or-connect-without-customers.input';
import { customer_addressesUpsertWithWhereUniqueWithoutCustomersInput } from './customer-addresses-upsert-with-where-unique-without-customers.input';
import { customer_addressesCreateManyCustomersInputEnvelope } from './customer-addresses-create-many-customers-input-envelope.input';
import { Prisma } from '@prisma/client';
import { customer_addressesWhereUniqueInput } from './customer-addresses-where-unique.input';
import { customer_addressesUpdateWithWhereUniqueWithoutCustomersInput } from './customer-addresses-update-with-where-unique-without-customers.input';
import { customer_addressesUpdateManyWithWhereWithoutCustomersInput } from './customer-addresses-update-many-with-where-without-customers.input';
import { customer_addressesScalarWhereInput } from './customer-addresses-scalar-where.input';

@InputType()
export class customer_addressesUncheckedUpdateManyWithoutCustomersNestedInput {

    @Field(() => [customer_addressesCreateWithoutCustomersInput], {nullable:true})
    @Type(() => customer_addressesCreateWithoutCustomersInput)
    create?: Array<customer_addressesCreateWithoutCustomersInput>;

    @Field(() => [customer_addressesCreateOrConnectWithoutCustomersInput], {nullable:true})
    @Type(() => customer_addressesCreateOrConnectWithoutCustomersInput)
    connectOrCreate?: Array<customer_addressesCreateOrConnectWithoutCustomersInput>;

    @Field(() => [customer_addressesUpsertWithWhereUniqueWithoutCustomersInput], {nullable:true})
    @Type(() => customer_addressesUpsertWithWhereUniqueWithoutCustomersInput)
    upsert?: Array<customer_addressesUpsertWithWhereUniqueWithoutCustomersInput>;

    @Field(() => customer_addressesCreateManyCustomersInputEnvelope, {nullable:true})
    @Type(() => customer_addressesCreateManyCustomersInputEnvelope)
    createMany?: customer_addressesCreateManyCustomersInputEnvelope;

    @Field(() => [customer_addressesWhereUniqueInput], {nullable:true})
    @Type(() => customer_addressesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<customer_addressesWhereUniqueInput, 'id'>>;

    @Field(() => [customer_addressesWhereUniqueInput], {nullable:true})
    @Type(() => customer_addressesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<customer_addressesWhereUniqueInput, 'id'>>;

    @Field(() => [customer_addressesWhereUniqueInput], {nullable:true})
    @Type(() => customer_addressesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<customer_addressesWhereUniqueInput, 'id'>>;

    @Field(() => [customer_addressesWhereUniqueInput], {nullable:true})
    @Type(() => customer_addressesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<customer_addressesWhereUniqueInput, 'id'>>;

    @Field(() => [customer_addressesUpdateWithWhereUniqueWithoutCustomersInput], {nullable:true})
    @Type(() => customer_addressesUpdateWithWhereUniqueWithoutCustomersInput)
    update?: Array<customer_addressesUpdateWithWhereUniqueWithoutCustomersInput>;

    @Field(() => [customer_addressesUpdateManyWithWhereWithoutCustomersInput], {nullable:true})
    @Type(() => customer_addressesUpdateManyWithWhereWithoutCustomersInput)
    updateMany?: Array<customer_addressesUpdateManyWithWhereWithoutCustomersInput>;

    @Field(() => [customer_addressesScalarWhereInput], {nullable:true})
    @Type(() => customer_addressesScalarWhereInput)
    deleteMany?: Array<customer_addressesScalarWhereInput>;
}
