import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersCreateWithoutCustomer_addressesInput } from './customers-create-without-customer-addresses.input';
import { Type } from 'class-transformer';
import { customersCreateOrConnectWithoutCustomer_addressesInput } from './customers-create-or-connect-without-customer-addresses.input';
import { Prisma } from '@prisma/client';
import { customersWhereUniqueInput } from './customers-where-unique.input';

@InputType()
export class customersCreateNestedOneWithoutCustomer_addressesInput {

    @Field(() => customersCreateWithoutCustomer_addressesInput, {nullable:true})
    @Type(() => customersCreateWithoutCustomer_addressesInput)
    create?: customersCreateWithoutCustomer_addressesInput;

    @Field(() => customersCreateOrConnectWithoutCustomer_addressesInput, {nullable:true})
    @Type(() => customersCreateOrConnectWithoutCustomer_addressesInput)
    connectOrCreate?: customersCreateOrConnectWithoutCustomer_addressesInput;

    @Field(() => customersWhereUniqueInput, {nullable:true})
    @Type(() => customersWhereUniqueInput)
    connect?: Prisma.AtLeast<customersWhereUniqueInput, 'id' | 'user_id'>;
}
