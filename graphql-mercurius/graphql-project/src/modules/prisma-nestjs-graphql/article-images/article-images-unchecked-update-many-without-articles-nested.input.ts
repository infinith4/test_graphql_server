import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { article_imagesCreateWithoutArticlesInput } from './article-images-create-without-articles.input';
import { Type } from 'class-transformer';
import { article_imagesCreateOrConnectWithoutArticlesInput } from './article-images-create-or-connect-without-articles.input';
import { article_imagesUpsertWithWhereUniqueWithoutArticlesInput } from './article-images-upsert-with-where-unique-without-articles.input';
import { article_imagesCreateManyArticlesInputEnvelope } from './article-images-create-many-articles-input-envelope.input';
import { Prisma } from '@prisma/client';
import { article_imagesWhereUniqueInput } from './article-images-where-unique.input';
import { article_imagesUpdateWithWhereUniqueWithoutArticlesInput } from './article-images-update-with-where-unique-without-articles.input';
import { article_imagesUpdateManyWithWhereWithoutArticlesInput } from './article-images-update-many-with-where-without-articles.input';
import { article_imagesScalarWhereInput } from './article-images-scalar-where.input';

@InputType()
export class article_imagesUncheckedUpdateManyWithoutArticlesNestedInput {

    @Field(() => [article_imagesCreateWithoutArticlesInput], {nullable:true})
    @Type(() => article_imagesCreateWithoutArticlesInput)
    create?: Array<article_imagesCreateWithoutArticlesInput>;

    @Field(() => [article_imagesCreateOrConnectWithoutArticlesInput], {nullable:true})
    @Type(() => article_imagesCreateOrConnectWithoutArticlesInput)
    connectOrCreate?: Array<article_imagesCreateOrConnectWithoutArticlesInput>;

    @Field(() => [article_imagesUpsertWithWhereUniqueWithoutArticlesInput], {nullable:true})
    @Type(() => article_imagesUpsertWithWhereUniqueWithoutArticlesInput)
    upsert?: Array<article_imagesUpsertWithWhereUniqueWithoutArticlesInput>;

    @Field(() => article_imagesCreateManyArticlesInputEnvelope, {nullable:true})
    @Type(() => article_imagesCreateManyArticlesInputEnvelope)
    createMany?: article_imagesCreateManyArticlesInputEnvelope;

    @Field(() => [article_imagesWhereUniqueInput], {nullable:true})
    @Type(() => article_imagesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<article_imagesWhereUniqueInput, 'id'>>;

    @Field(() => [article_imagesWhereUniqueInput], {nullable:true})
    @Type(() => article_imagesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<article_imagesWhereUniqueInput, 'id'>>;

    @Field(() => [article_imagesWhereUniqueInput], {nullable:true})
    @Type(() => article_imagesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<article_imagesWhereUniqueInput, 'id'>>;

    @Field(() => [article_imagesWhereUniqueInput], {nullable:true})
    @Type(() => article_imagesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<article_imagesWhereUniqueInput, 'id'>>;

    @Field(() => [article_imagesUpdateWithWhereUniqueWithoutArticlesInput], {nullable:true})
    @Type(() => article_imagesUpdateWithWhereUniqueWithoutArticlesInput)
    update?: Array<article_imagesUpdateWithWhereUniqueWithoutArticlesInput>;

    @Field(() => [article_imagesUpdateManyWithWhereWithoutArticlesInput], {nullable:true})
    @Type(() => article_imagesUpdateManyWithWhereWithoutArticlesInput)
    updateMany?: Array<article_imagesUpdateManyWithWhereWithoutArticlesInput>;

    @Field(() => [article_imagesScalarWhereInput], {nullable:true})
    @Type(() => article_imagesScalarWhereInput)
    deleteMany?: Array<article_imagesScalarWhereInput>;
}
