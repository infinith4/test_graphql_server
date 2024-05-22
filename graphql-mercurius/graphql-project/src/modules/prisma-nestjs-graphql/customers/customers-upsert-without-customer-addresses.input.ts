import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersUpdateWithoutCustomer_addressesInput } from './customers-update-without-customer-addresses.input';
import { Type } from 'class-transformer';
import { customersCreateWithoutCustomer_addressesInput } from './customers-create-without-customer-addresses.input';
import { customersWhereInput } from './customers-where.input';

@InputType()
export class customersUpsertWithoutCustomer_addressesInput {

    @Field(() => customersUpdateWithoutCustomer_addressesInput, {nullable:false})
    @Type(() => customersUpdateWithoutCustomer_addressesInput)
    update!: customersUpdateWithoutCustomer_addressesInput;

    @Field(() => customersCreateWithoutCustomer_addressesInput, {nullable:false})
    @Type(() => customersCreateWithoutCustomer_addressesInput)
    create!: customersCreateWithoutCustomer_addressesInput;

    @Field(() => customersWhereInput, {nullable:true})
    @Type(() => customersWhereInput)
    where?: customersWhereInput;
}
