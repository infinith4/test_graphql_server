import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { employeesWhereInput } from './employees-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CustomersListRelationFilter } from '../prisma/customers-list-relation-filter.input';

@InputType()
export class employeesWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [employeesWhereInput], {nullable:true})
    AND?: Array<employeesWhereInput>;

    @Field(() => [employeesWhereInput], {nullable:true})
    OR?: Array<employeesWhereInput>;

    @Field(() => [employeesWhereInput], {nullable:true})
    NOT?: Array<employeesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    first_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    last_name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    title?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    birth_date?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    hire_date?: DateTimeNullableFilter;

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

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    area_id?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;

    @Field(() => CustomersListRelationFilter, {nullable:true})
    customers?: CustomersListRelationFilter;
}
