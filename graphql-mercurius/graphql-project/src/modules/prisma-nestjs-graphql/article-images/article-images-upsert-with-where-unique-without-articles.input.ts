import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { article_imagesWhereUniqueInput } from './article-images-where-unique.input';
import { Type } from 'class-transformer';
import { article_imagesUpdateWithoutArticlesInput } from './article-images-update-without-articles.input';
import { article_imagesCreateWithoutArticlesInput } from './article-images-create-without-articles.input';

@InputType()
export class article_imagesUpsertWithWhereUniqueWithoutArticlesInput {

    @Field(() => article_imagesWhereUniqueInput, {nullable:false})
    @Type(() => article_imagesWhereUniqueInput)
    where!: Prisma.AtLeast<article_imagesWhereUniqueInput, 'id'>;

    @Field(() => article_imagesUpdateWithoutArticlesInput, {nullable:false})
    @Type(() => article_imagesUpdateWithoutArticlesInput)
    update!: article_imagesUpdateWithoutArticlesInput;

    @Field(() => article_imagesCreateWithoutArticlesInput, {nullable:false})
    @Type(() => article_imagesCreateWithoutArticlesInput)
    create!: article_imagesCreateWithoutArticlesInput;
}
