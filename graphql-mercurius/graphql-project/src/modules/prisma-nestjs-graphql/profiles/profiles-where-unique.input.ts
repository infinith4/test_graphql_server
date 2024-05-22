import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { profilesWhereInput } from './profiles-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UsersNullableRelationFilter } from '../prisma/users-nullable-relation-filter.input';

@InputType()
export class profilesWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    user_id?: number;

    @Field(() => [profilesWhereInput], {nullable:true})
    AND?: Array<profilesWhereInput>;

    @Field(() => [profilesWhereInput], {nullable:true})
    OR?: Array<profilesWhereInput>;

    @Field(() => [profilesWhereInput], {nullable:true})
    NOT?: Array<profilesWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    bio?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    website?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;

    @Field(() => UsersNullableRelationFilter, {nullable:true})
    users?: UsersNullableRelationFilter;
}
