import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Enumarticles_statusNullableFilter } from '../prisma/enumarticles-status-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UsersNullableRelationFilter } from '../prisma/users-nullable-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class articlesWhereInput {

    @Field(() => [articlesWhereInput], {nullable:true})
    AND?: Array<articlesWhereInput>;

    @Field(() => [articlesWhereInput], {nullable:true})
    OR?: Array<articlesWhereInput>;

    @Field(() => [articlesWhereInput], {nullable:true})
    NOT?: Array<articlesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
