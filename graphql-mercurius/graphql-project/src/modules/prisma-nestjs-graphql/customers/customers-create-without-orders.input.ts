import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { employeesCreateNestedOneWithoutCustomersInput } from '../employees/employees-create-nested-one-without-customers.input';
import { invoicesCreateNestedManyWithoutCustomersInput } from '../invoices/invoices-create-nested-many-without-customers.input';
import { usersCreateNestedOneWithoutCustomersInput } from '../users/users-create-nested-one-without-customers.input';

@InputType()
export class customersCreateWithoutOrdersInput {

    @Field(() => Int, {nullable:true})
    user_id?: number;

    @Field(() => String, {nullable:false})
    first_name!: string;

    @Field(() => String, {nullable:false})
    last_name!: string;

    @Field(() => String, {nullable:true})
    company?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => String, {nullable:true})
    state?: string;

    @Field(() => Int, {nullable:true})
    country_code?: number;

    @Field(() => String, {nullable:true})
    postal_code?: string;

    @Field(() => String, {nullable:true})
    phone_number?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => employeesCreateNestedOneWithoutCustomersInput, {nullable:true})
    employees?: employeesCreateNestedOneWithoutCustomersInput;

    @Field(() => invoicesCreateNestedManyWithoutCustomersInput, {nullable:true})
    invoices?: invoicesCreateNestedManyWithoutCustomersInput;

    @Field(() => usersCreateNestedOneWithoutCustomersInput, {nullable:true})
    users?: usersCreateNestedOneWithoutCustomersInput;
}
