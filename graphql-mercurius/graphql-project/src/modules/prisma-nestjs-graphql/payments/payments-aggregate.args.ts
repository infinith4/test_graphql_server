import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { paymentsWhereInput } from './payments-where.input';
import { Type } from 'class-transformer';
import { paymentsOrderByWithRelationInput } from './payments-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { paymentsWhereUniqueInput } from './payments-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class paymentsAggregateArgs {

    @Field(() => paymentsWhereInput, {nullable:true})
    @Type(() => paymentsWhereInput)
    where?: paymentsWhereInput;

    @Field(() => [paymentsOrderByWithRelationInput], {nullable:true})
    @Type(() => paymentsOrderByWithRelationInput)
    orderBy?: Array<paymentsOrderByWithRelationInput>;

    @Field(() => paymentsWhereUniqueInput, {nullable:true})
    @Type(() => paymentsWhereUniqueInput)
    cursor?: Prisma.AtLeast<paymentsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
