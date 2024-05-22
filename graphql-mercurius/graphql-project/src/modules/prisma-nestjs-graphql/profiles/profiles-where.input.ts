import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UsersNullableRelationFilter } from '../prisma/users-nullable-relation-filter.input';

@InputType()
export class profilesWhereInput {

    @Field(() => [profilesWhereInput], {nullable:true})
    AND?: Array<profilesWhereInput>;

    @Field(() => [profilesWhereInput], {nullable:true})
    OR?: Array<profilesWhereInput>;

    @Field(() => [profilesWhereInput], {nullable:true})
    NOT?: Array<profilesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    user_id?: IntNullableFilter;

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
