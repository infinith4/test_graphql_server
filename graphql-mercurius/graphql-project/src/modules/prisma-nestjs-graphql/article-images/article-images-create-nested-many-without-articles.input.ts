import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { article_imagesCreateWithoutArticlesInput } from './article-images-create-without-articles.input';
import { Type } from 'class-transformer';
import { article_imagesCreateOrConnectWithoutArticlesInput } from './article-images-create-or-connect-without-articles.input';
import { article_imagesCreateManyArticlesInputEnvelope } from './article-images-create-many-articles-input-envelope.input';
import { Prisma } from '@prisma/client';
import { article_imagesWhereUniqueInput } from './article-images-where-unique.input';

@InputType()
export class article_imagesCreateNestedManyWithoutArticlesInput {

    @Field(() => [article_imagesCreateWithoutArticlesInput], {nullable:true})
    @Type(() => article_imagesCreateWithoutArticlesInput)
    create?: Array<article_imagesCreateWithoutArticlesInput>;

    @Field(() => [article_imagesCreateOrConnectWithoutArticlesInput], {nullable:true})
    @Type(() => article_imagesCreateOrConnectWithoutArticlesInput)
    connectOrCreate?: Array<article_imagesCreateOrConnectWithoutArticlesInput>;

    @Field(() => article_imagesCreateManyArticlesInputEnvelope, {nullable:true})
    @Type(() => article_imagesCreateManyArticlesInputEnvelope)
    createMany?: article_imagesCreateManyArticlesInputEnvelope;

    @Field(() => [article_imagesWhereUniqueInput], {nullable:true})
    @Type(() => article_imagesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<article_imagesWhereUniqueInput, 'id'>>;
}
