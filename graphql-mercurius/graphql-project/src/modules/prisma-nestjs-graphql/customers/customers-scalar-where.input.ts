import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class customersScalarWhereInput {

    @Field(() => [customersScalarWhereInput], {nullable:true})
    AND?: Array<customersScalarWhereInput>;

    @Field(() => [customersScalarWhereInput], {nullable:true})
    OR?: Array<customersScalarWhereInput>;

    @Field(() => [customersScalarWhereInput], {nullable:true})
    NOT?: Array<customersScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    user_id?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    first_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    last_name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    company?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    city?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    state?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    country_code?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    postal_code?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone_number?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    support_rep_id?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;
}
