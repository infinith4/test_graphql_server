import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { employeesWhereUniqueInput } from './employees-where-unique.input';
import { Type } from 'class-transformer';
import { employeesCreateWithoutManage_areasInput } from './employees-create-without-manage-areas.input';

@InputType()
export class employeesCreateOrConnectWithoutManage_areasInput {

    @Field(() => employeesWhereUniqueInput, {nullable:false})
    @Type(() => employeesWhereUniqueInput)
    where!: Prisma.AtLeast<employeesWhereUniqueInput, 'id'>;

    @Field(() => employeesCreateWithoutManage_areasInput, {nullable:false})
    @Type(() => employeesCreateWithoutManage_areasInput)
    create!: employeesCreateWithoutManage_areasInput;
}
