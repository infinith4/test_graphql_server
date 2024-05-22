import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { articlesUpdateWithoutArticle_imagesInput } from './articles-update-without-article-images.input';
import { Type } from 'class-transformer';
import { articlesCreateWithoutArticle_imagesInput } from './articles-create-without-article-images.input';
import { articlesWhereInput } from './articles-where.input';

@InputType()
export class articlesUpsertWithoutArticle_imagesInput {

    @Field(() => articlesUpdateWithoutArticle_imagesInput, {nullable:false})
    @Type(() => articlesUpdateWithoutArticle_imagesInput)
    update!: articlesUpdateWithoutArticle_imagesInput;

    @Field(() => articlesCreateWithoutArticle_imagesInput, {nullable:false})
    @Type(() => articlesCreateWithoutArticle_imagesInput)
    create!: articlesCreateWithoutArticle_imagesInput;

    @Field(() => articlesWhereInput, {nullable:true})
    @Type(() => articlesWhereInput)
    where?: articlesWhereInput;
}
