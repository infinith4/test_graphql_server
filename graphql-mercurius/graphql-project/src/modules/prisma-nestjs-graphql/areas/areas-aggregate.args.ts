import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { areasWhereInput } from './areas-where.input';
import { Type } from 'class-transformer';
import { areasOrderByWithRelationInput } from './areas-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { areasWhereUniqueInput } from './areas-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class areasAggregateArgs {

    @Field(() => areasWhereInput, {nullable:true})
    @Type(() => areasWhereInput)
    where?: areasWhereInput;

    @Field(() => [areasOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<areasOrderByWithRelationInput>;

    @Field(() => areasWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<areasWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
