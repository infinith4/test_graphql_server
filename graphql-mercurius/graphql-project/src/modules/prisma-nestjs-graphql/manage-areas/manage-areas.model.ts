import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { employees } from '../employees/employees.model';
import { areas } from '../areas/areas.model';

@ObjectType()
export class manage_areas {

    @Field(() => Int, {nullable:false})
    area_id!: number;

    @Field(() => Int, {nullable:false})
    employee_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;

    @Field(() => employees, {nullable:false})
    employees?: employees;

    @Field(() => areas, {nullable:false})
    areas?: areas;
}
