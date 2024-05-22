import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { employeesWhereInput } from './employees-where.input';
import { Type } from 'class-transformer';
import { employeesOrderByWithRelationInput } from './employees-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { employeesWhereUniqueInput } from './employees-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class employeesAggregateArgs {

    @Field(() => employeesWhereInput, {nullable:true})
    @Type(() => employeesWhereInput)
    where?: employeesWhereInput;

    @Field(() => [employeesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<employeesOrderByWithRelationInput>;

    @Field(() => employeesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<employeesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
