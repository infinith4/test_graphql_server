import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutCustomersInput } from '../users/users-create-nested-one-without-customers.input';
import { Type } from 'class-transformer';

@InputType()
export class customersCreateWithoutCustomer_addressesInput {

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutCustomersInput, {nullable:false})
    @Type(() => usersCreateNestedOneWithoutCustomersInput)
    users!: usersCreateNestedOneWithoutCustomersInput;
}
