import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { employeesCreateWithoutManage_areasInput } from './employees-create-without-manage-areas.input';
import { Type } from 'class-transformer';
import { employeesCreateOrConnectWithoutManage_areasInput } from './employees-create-or-connect-without-manage-areas.input';
import { Prisma } from '@prisma/client';
import { employeesWhereUniqueInput } from './employees-where-unique.input';

@InputType()
export class employeesCreateNestedOneWithoutManage_areasInput {

    @Field(() => employeesCreateWithoutManage_areasInput, {nullable:true})
    @Type(() => employeesCreateWithoutManage_areasInput)
    create?: employeesCreateWithoutManage_areasInput;

    @Field(() => employeesCreateOrConnectWithoutManage_areasInput, {nullable:true})
    @Type(() => employeesCreateOrConnectWithoutManage_areasInput)
    connectOrCreate?: employeesCreateOrConnectWithoutManage_areasInput;

    @Field(() => employeesWhereUniqueInput, {nullable:true})
    @Type(() => employeesWhereUniqueInput)
    connect?: Prisma.AtLeast<employeesWhereUniqueInput, 'id'>;
}
