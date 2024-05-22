import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Customer_addressesCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    customer_id!: number;

    @Field(() => Int, {nullable:false})
    address_line1!: number;

    @Field(() => Int, {nullable:false})
    address_line2!: number;

    @Field(() => Int, {nullable:false})
    city!: number;

    @Field(() => Int, {nullable:false})
    state!: number;

    @Field(() => Int, {nullable:false})
    postal_code!: number;

    @Field(() => Int, {nullable:false})
    country!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
