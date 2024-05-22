import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { employeesWhereInput } from './employees-where.input';
import { Type } from 'class-transformer';
import { employeesUpdateWithoutManage_areasInput } from './employees-update-without-manage-areas.input';

@InputType()
export class employeesUpdateToOneWithWhereWithoutManage_areasInput {

    @Field(() => employeesWhereInput, {nullable:true})
    @Type(() => employeesWhereInput)
    where?: employeesWhereInput;

    @Field(() => employeesUpdateWithoutManage_areasInput, {nullable:false})
    @Type(() => employeesUpdateWithoutManage_areasInput)
    data!: employeesUpdateWithoutManage_areasInput;
}
