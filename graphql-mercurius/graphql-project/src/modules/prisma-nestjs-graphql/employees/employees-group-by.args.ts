import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { employeesWhereInput } from './employees-where.input';
import { Type } from 'class-transformer';
import { employeesOrderByWithAggregationInput } from './employees-order-by-with-aggregation.input';
import { EmployeesScalarFieldEnum } from '../prisma/employees-scalar-field.enum';
import { employeesScalarWhereWithAggregatesInput } from './employees-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class employeesGroupByArgs {

    @Field(() => employeesWhereInput, {nullable:true})
    @Type(() => employeesWhereInput)
    where?: employeesWhereInput;

    @Field(() => [employeesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<employeesOrderByWithAggregationInput>;

    @Field(() => [EmployeesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EmployeesScalarFieldEnum>;

    @Field(() => employeesScalarWhereWithAggregatesInput, {nullable:true})
    having?: employeesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
