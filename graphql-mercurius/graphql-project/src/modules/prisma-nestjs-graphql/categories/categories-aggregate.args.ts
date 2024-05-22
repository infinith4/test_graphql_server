import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categoriesWhereInput } from './categories-where.input';
import { Type } from 'class-transformer';
import { categoriesOrderByWithRelationInput } from './categories-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { categoriesWhereUniqueInput } from './categories-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class categoriesAggregateArgs {

    @Field(() => categoriesWhereInput, {nullable:true})
    @Type(() => categoriesWhereInput)
    where?: categoriesWhereInput;

    @Field(() => [categoriesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<categoriesOrderByWithRelationInput>;

    @Field(() => categoriesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<categoriesWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
