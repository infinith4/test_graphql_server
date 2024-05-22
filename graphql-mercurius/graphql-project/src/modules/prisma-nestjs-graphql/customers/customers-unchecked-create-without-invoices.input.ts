import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ordersUncheckedCreateNestedManyWithoutCustomersInput } from '../orders/orders-unchecked-create-nested-many-without-customers.input';
import { usersUncheckedCreateNestedOneWithoutCustomersInput } from '../users/users-unchecked-create-nested-one-without-customers.input';

@InputType()
export class customersUncheckedCreateWithoutInvoicesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Int, {nullable:true})
    support_rep_id?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ordersUncheckedCreateNestedManyWithoutCustomersInput, {nullable:true})
    orders?: ordersUncheckedCreateNestedManyWithoutCustomersInput;

    @Field(() => usersUncheckedCreateNestedOneWithoutCustomersInput, {nullable:true})
    users?: usersUncheckedCreateNestedOneWithoutCustomersInput;
}
