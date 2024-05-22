import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { employeesUpdateInput } from './employees-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { employeesWhereUniqueInput } from './employees-where-unique.input';

@ArgsType()
export class UpdateOneemployeesArgs {

    @Field(() => employeesUpdateInput, {nullable:false})
    @Type(() => employeesUpdateInput)
    data!: employeesUpdateInput;

    @Field(() => employeesWhereUniqueInput, {nullable:false})
    @Type(() => employeesWhereUniqueInput)
    where!: Prisma.AtLeast<employeesWhereUniqueInput, 'id'>;
}
