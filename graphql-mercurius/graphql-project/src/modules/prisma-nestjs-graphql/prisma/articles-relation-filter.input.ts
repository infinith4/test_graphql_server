import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { articlesWhereInput } from '../articles/articles-where.input';

@InputType()
export class ArticlesRelationFilter {

    @Field(() => articlesWhereInput, {nullable:true})
    is?: articlesWhereInput;

    @Field(() => articlesWhereInput, {nullable:true})
    isNot?: articlesWhereInput;
}
