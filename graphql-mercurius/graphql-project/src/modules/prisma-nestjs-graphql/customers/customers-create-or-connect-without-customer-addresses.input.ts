import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { customersWhereUniqueInput } from './customers-where-unique.input';
import { Type } from 'class-transformer';
import { customersCreateWithoutCustomer_addressesInput } from './customers-create-without-customer-addresses.input';

@InputType()
export class customersCreateOrConnectWithoutCustomer_addressesInput {

    @Field(() => customersWhereUniqueInput, {nullable:false})
    @Type(() => customersWhereUniqueInput)
    where!: Prisma.AtLeast<customersWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => customersCreateWithoutCustomer_addressesInput, {nullable:false})
    @Type(() => customersCreateWithoutCustomer_addressesInput)
    create!: customersCreateWithoutCustomer_addressesInput;
}
