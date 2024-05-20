import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Customer } from '../../customers/entities/customer.entity';

@ObjectType()
export class CustomerAddress {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    customer_id!: number;

    @Field(() => String, {nullable:false})
    address_line1!: string;

    @Field(() => String, {nullable:true})
    address_line2!: string | null;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:false})
    state!: string;

    @Field(() => String, {nullable:false})
    postal_code!: string;

    @Field(() => String, {nullable:false})
    country!: string;

    @Field(() => Date, {nullable:true})
    created_at!: Date | null;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;

    @Field(() => Customer, {nullable:false})
    customers?: Customer;
}
