import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { article_imagesWhereInput } from '../article-images/article-images-where.input';

@InputType()
export class Article_imagesListRelationFilter {

    @Field(() => article_imagesWhereInput, {nullable:true})
    every?: article_imagesWhereInput;

    @Field(() => article_imagesWhereInput, {nullable:true})
    some?: article_imagesWhereInput;

    @Field(() => article_imagesWhereInput, {nullable:true})
    none?: article_imagesWhereInput;
}
