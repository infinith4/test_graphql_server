import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customersWhereInput } from './customers-where.input';
import { Type } from 'class-transformer';
import { customersOrderByWithRelationInput } from './customers-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { customersWhereUniqueInput } from './customers-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class customersAggregateArgs {

    @Field(() => customersWhereInput, {nullable:true})
    @Type(() => customersWhereInput)
    where?: customersWhereInput;

    @Field(() => [customersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<customersOrderByWithRelationInput>;

    @Field(() => customersWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<customersWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
