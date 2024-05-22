import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { employeesWhereUniqueInput } from './employees-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueemployeesArgs {

    @Field(() => employeesWhereUniqueInput, {nullable:false})
    @Type(() => employeesWhereUniqueInput)
    where!: Prisma.AtLeast<employeesWhereUniqueInput, 'id'>;
}
