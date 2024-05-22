import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { employeesUpdateWithoutManage_areasInput } from './employees-update-without-manage-areas.input';
import { Type } from 'class-transformer';
import { employeesCreateWithoutManage_areasInput } from './employees-create-without-manage-areas.input';
import { employeesWhereInput } from './employees-where.input';

@InputType()
export class employeesUpsertWithoutManage_areasInput {

    @Field(() => employeesUpdateWithoutManage_areasInput, {nullable:false})
    @Type(() => employeesUpdateWithoutManage_areasInput)
    update!: employeesUpdateWithoutManage_areasInput;

    @Field(() => employeesCreateWithoutManage_areasInput, {nullable:false})
    @Type(() => employeesCreateWithoutManage_areasInput)
    create!: employeesCreateWithoutManage_areasInput;

    @Field(() => employeesWhereInput, {nullable:true})
    @Type(() => employeesWhereInput)
    where?: employeesWhereInput;
}
