import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { customer_addressesUncheckedCreateNestedManyWithoutCustomersInput } from '../customer-addresses/customer-addresses-unchecked-create-nested-many-without-customers.input';

@InputType()
export class customersUncheckedCreateWithoutUsersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => customer_addressesUncheckedCreateNestedManyWithoutCustomersInput, {nullable:true})
    customer_addresses?: customer_addressesUncheckedCreateNestedManyWithoutCustomersInput;
}
