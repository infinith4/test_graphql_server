import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { articlesWhereInput } from './articles-where.input';
import { Type } from 'class-transformer';
import { articlesUpdateWithoutArticle_imagesInput } from './articles-update-without-article-images.input';

@InputType()
export class articlesUpdateToOneWithWhereWithoutArticle_imagesInput {

    @Field(() => articlesWhereInput, {nullable:true})
    @Type(() => articlesWhereInput)
    where?: articlesWhereInput;

    @Field(() => articlesUpdateWithoutArticle_imagesInput, {nullable:false})
    @Type(() => articlesUpdateWithoutArticle_imagesInput)
    data!: articlesUpdateWithoutArticle_imagesInput;
}
