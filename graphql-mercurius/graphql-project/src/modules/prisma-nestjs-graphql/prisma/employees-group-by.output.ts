import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EmployeesCountAggregate } from './employees-count-aggregate.output';
import { EmployeesAvgAggregate } from './employees-avg-aggregate.output';
import { EmployeesSumAggregate } from './employees-sum-aggregate.output';
import { EmployeesMinAggregate } from './employees-min-aggregate.output';
import { EmployeesMaxAggregate } from './employees-max-aggregate.output';

@ObjectType()
export class EmployeesGroupBy {

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

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => EmployeesCountAggregate, {nullable:true})
    _count?: EmployeesCountAggregate;

    @Field(() => EmployeesAvgAggregate, {nullable:true})
    _avg?: EmployeesAvgAggregate;

    @Field(() => EmployeesSumAggregate, {nullable:true})
    _sum?: EmployeesSumAggregate;

    @Field(() => EmployeesMinAggregate, {nullable:true})
    _min?: EmployeesMinAggregate;

    @Field(() => EmployeesMaxAggregate, {nullable:true})
    _max?: EmployeesMaxAggregate;
}
