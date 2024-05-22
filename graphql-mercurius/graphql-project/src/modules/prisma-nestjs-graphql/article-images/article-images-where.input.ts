import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ArticlesRelationFilter } from '../prisma/articles-relation-filter.input';

@InputType()
export class article_imagesWhereInput {

    @Field(() => [article_imagesWhereInput], {nullable:true})
    AND?: Array<article_imagesWhereInput>;

    @Field(() => [article_imagesWhereInput], {nullable:true})
    OR?: Array<article_imagesWhereInput>;

    @Field(() => [article_imagesWhereInput], {nullable:true})
    NOT?: Array<article_imagesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    url?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    article_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;

    @Field(() => ArticlesRelationFilter, {nullable:true})
    articles?: ArticlesRelationFilter;
}
