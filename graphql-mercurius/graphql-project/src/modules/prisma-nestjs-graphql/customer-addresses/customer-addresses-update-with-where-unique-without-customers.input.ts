import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { customer_addressesWhereUniqueInput } from './customer-addresses-where-unique.input';
import { Type } from 'class-transformer';
import { customer_addressesUpdateWithoutCustomersInput } from './customer-addresses-update-without-customers.input';

@InputType()
export class customer_addressesUpdateWithWhereUniqueWithoutCustomersInput {

    @Field(() => customer_addressesWhereUniqueInput, {nullable:false})
    @Type(() => customer_addressesWhereUniqueInput)
    where!: Prisma.AtLeast<customer_addressesWhereUniqueInput, 'id'>;

    @Field(() => customer_addressesUpdateWithoutCustomersInput, {nullable:false})
    @Type(() => customer_addressesUpdateWithoutCustomersInput)
    data!: customer_addressesUpdateWithoutCustomersInput;
}
