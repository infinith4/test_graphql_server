import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { usersWhereInput } from './users-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ArticlesListRelationFilter } from '../prisma/articles-list-relation-filter.input';
import { CartsListRelationFilter } from '../prisma/carts-list-relation-filter.input';
import { CustomersNullableRelationFilter } from '../prisma/customers-nullable-relation-filter.input';
import { OrdersListRelationFilter } from '../prisma/orders-list-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class usersWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => [usersWhereInput], {nullable:true})
    AND?: Array<usersWhereInput>;

    @Field(() => [usersWhereInput], {nullable:true})
    OR?: Array<usersWhereInput>;

    @Field(() => [usersWhereInput], {nullable:true})
    NOT?: Array<usersWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    hashed_password?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;

    @Field(() => ArticlesListRelationFilter, {nullable:true})
    articles?: ArticlesListRelationFilter;

    @Field(() => CartsListRelationFilter, {nullable:true})
    carts?: CartsListRelationFilter;

    @Field(() => CustomersNullableRelationFilter, {nullable:true})
    customers?: CustomersNullableRelationFilter;

    @Field(() => OrdersListRelationFilter, {nullable:true})
    @Type(() => OrdersListRelationFilter)
    orders?: OrdersListRelationFilter;
}
