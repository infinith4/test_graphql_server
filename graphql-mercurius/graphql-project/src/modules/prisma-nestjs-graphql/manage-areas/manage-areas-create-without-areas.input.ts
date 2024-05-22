import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { employeesCreateNestedOneWithoutManage_areasInput } from '../employees/employees-create-nested-one-without-manage-areas.input';

@InputType()
export class manage_areasCreateWithoutAreasInput {

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => employeesCreateNestedOneWithoutManage_areasInput, {nullable:false})
    employees!: employeesCreateNestedOneWithoutManage_areasInput;
}
