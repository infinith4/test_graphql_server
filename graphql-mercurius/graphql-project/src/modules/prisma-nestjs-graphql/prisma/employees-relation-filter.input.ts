import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { employeesWhereInput } from '../employees/employees-where.input';

@InputType()
export class EmployeesRelationFilter {

    @Field(() => employeesWhereInput, {nullable:true})
    is?: employeesWhereInput;

    @Field(() => employeesWhereInput, {nullable:true})
    isNot?: employeesWhereInput;
}
