import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersCreateWithoutCustomer_addressesInput } from './customers-create-without-customer-addresses.input';
import { Type } from 'class-transformer';
import { customersCreateOrConnectWithoutCustomer_addressesInput } from './customers-create-or-connect-without-customer-addresses.input';
import { customersUpsertWithoutCustomer_addressesInput } from './customers-upsert-without-customer-addresses.input';
import { Prisma } from '@prisma/client';
import { customersWhereUniqueInput } from './customers-where-unique.input';
import { customersUpdateToOneWithWhereWithoutCustomer_addressesInput } from './customers-update-to-one-with-where-without-customer-addresses.input';

@InputType()
export class customersUpdateOneRequiredWithoutCustomer_addressesNestedInput {

    @Field(() => customersCreateWithoutCustomer_addressesInput, {nullable:true})
    @Type(() => customersCreateWithoutCustomer_addressesInput)
    create?: customersCreateWithoutCustomer_addressesInput;

    @Field(() => customersCreateOrConnectWithoutCustomer_addressesInput, {nullable:true})
    @Type(() => customersCreateOrConnectWithoutCustomer_addressesInput)
    connectOrCreate?: customersCreateOrConnectWithoutCustomer_addressesInput;

    @Field(() => customersUpsertWithoutCustomer_addressesInput, {nullable:true})
    @Type(() => customersUpsertWithoutCustomer_addressesInput)
    upsert?: customersUpsertWithoutCustomer_addressesInput;

    @Field(() => customersWhereUniqueInput, {nullable:true})
    @Type(() => customersWhereUniqueInput)
    connect?: Prisma.AtLeast<customersWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => customersUpdateToOneWithWhereWithoutCustomer_addressesInput, {nullable:true})
    @Type(() => customersUpdateToOneWithWhereWithoutCustomer_addressesInput)
    update?: customersUpdateToOneWithWhereWithoutCustomer_addressesInput;
}
