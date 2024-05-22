import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { customer_addressesWhereUniqueInput } from './customer-addresses-where-unique.input';
import { Type } from 'class-transformer';
import { customer_addressesCreateWithoutCustomersInput } from './customer-addresses-create-without-customers.input';

@InputType()
export class customer_addressesCreateOrConnectWithoutCustomersInput {

    @Field(() => customer_addressesWhereUniqueInput, {nullable:false})
    @Type(() => customer_addressesWhereUniqueInput)
    where!: Prisma.AtLeast<customer_addressesWhereUniqueInput, 'id'>;

    @Field(() => customer_addressesCreateWithoutCustomersInput, {nullable:false})
    @Type(() => customer_addressesCreateWithoutCustomersInput)
    create!: customer_addressesCreateWithoutCustomersInput;
}
