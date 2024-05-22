import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { profilesWhereInput } from './profiles-where.input';
import { Type } from 'class-transformer';
import { profilesOrderByWithRelationInput } from './profiles-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { profilesWhereUniqueInput } from './profiles-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class profilesAggregateArgs {

    @Field(() => profilesWhereInput, {nullable:true})
    @Type(() => profilesWhereInput)
    where?: profilesWhereInput;

    @Field(() => [profilesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<profilesOrderByWithRelationInput>;

    @Field(() => profilesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<profilesWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
