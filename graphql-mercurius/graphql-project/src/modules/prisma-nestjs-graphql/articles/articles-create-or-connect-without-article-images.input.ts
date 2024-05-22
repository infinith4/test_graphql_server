import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { articlesWhereUniqueInput } from './articles-where-unique.input';
import { Type } from 'class-transformer';
import { articlesCreateWithoutArticle_imagesInput } from './articles-create-without-article-images.input';

@InputType()
export class articlesCreateOrConnectWithoutArticle_imagesInput {

    @Field(() => articlesWhereUniqueInput, {nullable:false})
    @Type(() => articlesWhereUniqueInput)
    where!: Prisma.AtLeast<articlesWhereUniqueInput, 'id'>;

    @Field(() => articlesCreateWithoutArticle_imagesInput, {nullable:false})
    @Type(() => articlesCreateWithoutArticle_imagesInput)
    create!: articlesCreateWithoutArticle_imagesInput;
}
