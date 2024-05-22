import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class employeesCreateWithoutCustomersInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    first_name!: string;

    @Field(() => String, {nullable:false})
    last_name!: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Date, {nullable:true})
    birth_date?: Date | string;

    @Field(() => Date, {nullable:true})
    hire_date?: Date | string;

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

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => Int, {nullable:true})
    area_id?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
