import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EmployeesCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    first_name!: number;

    @Field(() => Int, {nullable:false})
    last_name!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    birth_date!: number;

    @Field(() => Int, {nullable:false})
    hire_date!: number;

    @Field(() => Int, {nullable:false})
    address!: number;

    @Field(() => Int, {nullable:false})
    city!: number;

    @Field(() => Int, {nullable:false})
    state!: number;

    @Field(() => Int, {nullable:false})
    country_code!: number;

    @Field(() => Int, {nullable:false})
    postal_code!: number;

    @Field(() => Int, {nullable:false})
    phone_number!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    area_id!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
