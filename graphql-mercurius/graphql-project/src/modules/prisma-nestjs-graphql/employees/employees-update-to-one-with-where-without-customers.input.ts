import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { employeesWhereInput } from './employees-where.input';
import { Type } from 'class-transformer';
import { employeesUpdateWithoutCustomersInput } from './employees-update-without-customers.input';

@InputType()
export class employeesUpdateToOneWithWhereWithoutCustomersInput {

    @Field(() => employeesWhereInput, {nullable:true})
    @Type(() => employeesWhereInput)
    where?: employeesWhereInput;

    @Field(() => employeesUpdateWithoutCustomersInput, {nullable:false})
    @Type(() => employeesUpdateWithoutCustomersInput)
    data!: employeesUpdateWithoutCustomersInput;
}
