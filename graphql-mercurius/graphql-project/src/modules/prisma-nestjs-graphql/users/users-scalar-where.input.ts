import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class usersScalarWhereInput {

    @Field(() => [usersScalarWhereInput], {nullable:true})
    AND?: Array<usersScalarWhereInput>;

    @Field(() => [usersScalarWhereInput], {nullable:true})
    OR?: Array<usersScalarWhereInput>;

    @Field(() => [usersScalarWhereInput], {nullable:true})
    NOT?: Array<usersScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    first_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    last_name?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    password?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone_number?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    gender?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_of_birth?: DateTimeNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    country_code?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avatar_url?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    last_login?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;
}
