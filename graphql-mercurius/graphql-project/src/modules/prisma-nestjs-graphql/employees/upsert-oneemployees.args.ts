import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { employeesWhereUniqueInput } from './employees-where-unique.input';
import { Type } from 'class-transformer';
import { employeesCreateInput } from './employees-create.input';
import { employeesUpdateInput } from './employees-update.input';

@ArgsType()
export class UpsertOneemployeesArgs {

    @Field(() => employeesWhereUniqueInput, {nullable:false})
    @Type(() => employeesWhereUniqueInput)
    where!: Prisma.AtLeast<employeesWhereUniqueInput, 'id'>;

    @Field(() => employeesCreateInput, {nullable:false})
    @Type(() => employeesCreateInput)
    create!: employeesCreateInput;

    @Field(() => employeesUpdateInput, {nullable:false})
    @Type(() => employeesUpdateInput)
    update!: employeesUpdateInput;
}
