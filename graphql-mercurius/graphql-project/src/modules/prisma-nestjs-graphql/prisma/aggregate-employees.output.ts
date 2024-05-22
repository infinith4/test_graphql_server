import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EmployeesCountAggregate } from './employees-count-aggregate.output';
import { EmployeesAvgAggregate } from './employees-avg-aggregate.output';
import { EmployeesSumAggregate } from './employees-sum-aggregate.output';
import { EmployeesMinAggregate } from './employees-min-aggregate.output';
import { EmployeesMaxAggregate } from './employees-max-aggregate.output';

@ObjectType()
export class AggregateEmployees {

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
