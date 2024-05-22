import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { articlesCreateNestedOneWithoutArticle_imagesInput } from '../articles/articles-create-nested-one-without-article-images.input';

@InputType()
export class article_imagesCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => articlesCreateNestedOneWithoutArticle_imagesInput, {nullable:false})
    articles!: articlesCreateNestedOneWithoutArticle_imagesInput;
}
