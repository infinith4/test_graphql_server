import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { profilesWhereInput } from './profiles-where.input';
import { Type } from 'class-transformer';
import { profilesOrderByWithAggregationInput } from './profiles-order-by-with-aggregation.input';
import { ProfilesScalarFieldEnum } from '../prisma/profiles-scalar-field.enum';
import { profilesScalarWhereWithAggregatesInput } from './profiles-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class profilesGroupByArgs {

    @Field(() => profilesWhereInput, {nullable:true})
    @Type(() => profilesWhereInput)
    where?: profilesWhereInput;

    @Field(() => [profilesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<profilesOrderByWithAggregationInput>;

    @Field(() => [ProfilesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProfilesScalarFieldEnum>;

    @Field(() => profilesScalarWhereWithAggregatesInput, {nullable:true})
    having?: profilesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
