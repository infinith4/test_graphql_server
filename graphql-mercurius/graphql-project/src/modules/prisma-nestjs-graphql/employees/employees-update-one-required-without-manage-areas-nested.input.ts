import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { employeesCreateWithoutManage_areasInput } from './employees-create-without-manage-areas.input';
import { Type } from 'class-transformer';
import { employeesCreateOrConnectWithoutManage_areasInput } from './employees-create-or-connect-without-manage-areas.input';
import { employeesUpsertWithoutManage_areasInput } from './employees-upsert-without-manage-areas.input';
import { Prisma } from '@prisma/client';
import { employeesWhereUniqueInput } from './employees-where-unique.input';
import { employeesUpdateToOneWithWhereWithoutManage_areasInput } from './employees-update-to-one-with-where-without-manage-areas.input';

@InputType()
export class employeesUpdateOneRequiredWithoutManage_areasNestedInput {

    @Field(() => employeesCreateWithoutManage_areasInput, {nullable:true})
    @Type(() => employeesCreateWithoutManage_areasInput)
    create?: employeesCreateWithoutManage_areasInput;

    @Field(() => employeesCreateOrConnectWithoutManage_areasInput, {nullable:true})
    @Type(() => employeesCreateOrConnectWithoutManage_areasInput)
    connectOrCreate?: employeesCreateOrConnectWithoutManage_areasInput;

    @Field(() => employeesUpsertWithoutManage_areasInput, {nullable:true})
    @Type(() => employeesUpsertWithoutManage_areasInput)
    upsert?: employeesUpsertWithoutManage_areasInput;

    @Field(() => employeesWhereUniqueInput, {nullable:true})
    @Type(() => employeesWhereUniqueInput)
    connect?: Prisma.AtLeast<employeesWhereUniqueInput, 'id'>;

    @Field(() => employeesUpdateToOneWithWhereWithoutManage_areasInput, {nullable:true})
    @Type(() => employeesUpdateToOneWithWhereWithoutManage_areasInput)
    update?: employeesUpdateToOneWithWhereWithoutManage_areasInput;
}
