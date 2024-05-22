import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { customers } from '../customers/customers.model';
import { EmployeesCount } from '../prisma/employees-count.output';

@ObjectType()
export class employees {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    first_name!: string;

    @Field(() => String, {nullable:false})
    last_name!: string;

    @Field(() => String, {nullable:true})
    title!: string | null;

    @Field(() => Date, {nullable:true})
    birth_date!: Date | null;

    @Field(() => Date, {nullable:true})
    hire_date!: Date | null;

    @Field(() => String, {nullable:true})
    address!: string | null;

    @Field(() => String, {nullable:true})
    city!: string | null;

    @Field(() => String, {nullable:true})
    state!: string | null;

    @Field(() => Int, {nullable:true})
    country_code!: number | null;

    @Field(() => String, {nullable:true})
    postal_code!: string | null;

    @Field(() => String, {nullable:true})
    phone_number!: string | null;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => Int, {nullable:true})
    area_id!: number | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;

    @Field(() => [customers], {nullable:true})
    customers?: Array<customers>;

    @Field(() => EmployeesCount, {nullable:false})
    _count?: EmployeesCount;
}
