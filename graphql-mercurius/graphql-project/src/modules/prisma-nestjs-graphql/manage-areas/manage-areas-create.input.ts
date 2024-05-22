import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { employeesCreateNestedOneWithoutManage_areasInput } from '../employees/employees-create-nested-one-without-manage-areas.input';
import { areasCreateNestedOneWithoutManage_areasInput } from '../areas/areas-create-nested-one-without-manage-areas.input';

@InputType()
export class manage_areasCreateInput {

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => employeesCreateNestedOneWithoutManage_areasInput, {nullable:false})
    employees!: employeesCreateNestedOneWithoutManage_areasInput;

    @Field(() => areasCreateNestedOneWithoutManage_areasInput, {nullable:false})
    areas!: areasCreateNestedOneWithoutManage_areasInput;
}
