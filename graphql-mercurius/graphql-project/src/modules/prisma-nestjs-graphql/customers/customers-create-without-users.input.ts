import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customer_addressesCreateNestedManyWithoutCustomersInput } from '../customer-addresses/customer-addresses-create-nested-many-without-customers.input';

@InputType()
export class customersCreateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => customer_addressesCreateNestedManyWithoutCustomersInput, {nullable:true})
    customer_addresses?: customer_addressesCreateNestedManyWithoutCustomersInput;
}
