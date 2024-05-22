import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { merchantsWhereInput } from './merchants-where.input';
import { Type } from 'class-transformer';
import { merchantsOrderByWithRelationInput } from './merchants-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { merchantsWhereUniqueInput } from './merchants-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class merchantsAggregateArgs {

    @Field(() => merchantsWhereInput, {nullable:true})
    @Type(() => merchantsWhereInput)
    where?: merchantsWhereInput;

    @Field(() => [merchantsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<merchantsOrderByWithRelationInput>;

    @Field(() => merchantsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<merchantsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
