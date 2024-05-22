import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersCreateNestedOneWithoutCustomer_addressesInput } from '../customers/customers-create-nested-one-without-customer-addresses.input';

@InputType()
export class customer_addressesCreateInput {

    @Field(() => String, {nullable:false})
    address_line1!: string;

    @Field(() => String, {nullable:true})
    address_line2?: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:false})
    state!: string;

    @Field(() => String, {nullable:false})
    postal_code!: string;

    @Field(() => String, {nullable:false})
    country!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => customersCreateNestedOneWithoutCustomer_addressesInput, {nullable:false})
    customers!: customersCreateNestedOneWithoutCustomer_addressesInput;
}
