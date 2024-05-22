import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customer_addressesCreateWithoutCustomersInput } from './customer-addresses-create-without-customers.input';
import { Type } from 'class-transformer';
import { customer_addressesCreateOrConnectWithoutCustomersInput } from './customer-addresses-create-or-connect-without-customers.input';
import { customer_addressesCreateManyCustomersInputEnvelope } from './customer-addresses-create-many-customers-input-envelope.input';
import { Prisma } from '@prisma/client';
import { customer_addressesWhereUniqueInput } from './customer-addresses-where-unique.input';

@InputType()
export class customer_addressesUncheckedCreateNestedManyWithoutCustomersInput {

    @Field(() => [customer_addressesCreateWithoutCustomersInput], {nullable:true})
    @Type(() => customer_addressesCreateWithoutCustomersInput)
    create?: Array<customer_addressesCreateWithoutCustomersInput>;

    @Field(() => [customer_addressesCreateOrConnectWithoutCustomersInput], {nullable:true})
    @Type(() => customer_addressesCreateOrConnectWithoutCustomersInput)
    connectOrCreate?: Array<customer_addressesCreateOrConnectWithoutCustomersInput>;

    @Field(() => customer_addressesCreateManyCustomersInputEnvelope, {nullable:true})
    @Type(() => customer_addressesCreateManyCustomersInputEnvelope)
    createMany?: customer_addressesCreateManyCustomersInputEnvelope;

    @Field(() => [customer_addressesWhereUniqueInput], {nullable:true})
    @Type(() => customer_addressesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<customer_addressesWhereUniqueInput, 'id'>>;
}
