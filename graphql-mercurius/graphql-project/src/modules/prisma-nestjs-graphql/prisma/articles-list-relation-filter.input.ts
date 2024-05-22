import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { articlesWhereInput } from '../articles/articles-where.input';

@InputType()
export class ArticlesListRelationFilter {

    @Field(() => articlesWhereInput, {nullable:true})
    every?: articlesWhereInput;

    @Field(() => articlesWhereInput, {nullable:true})
    some?: articlesWhereInput;

    @Field(() => articlesWhereInput, {nullable:true})
    none?: articlesWhereInput;
}
