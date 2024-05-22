import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { articlesWhereInput } from './articles-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Enumarticles_statusNullableFilter } from '../prisma/enumarticles-status-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UsersNullableRelationFilter } from '../prisma/users-nullable-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class articlesWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [articlesWhereInput], {nullable:true})
    AND?: Array<articlesWhereInput>;

    @Field(() => [articlesWhereInput], {nullable:true})
    OR?: Array<articlesWhereInput>;

    @Field(() => [articlesWhereInput], {nullable:true})
    NOT?: Array<articlesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => Enumarticles_statusNullableFilter, {nullable:true})
    status?: Enumarticles_statusNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    user_id?: IntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;

    @Field(() => UsersNullableRelationFilter, {nullable:true})
    @Type(() => UsersNullableRelationFilter)
    users?: UsersNullableRelationFilter;
}
