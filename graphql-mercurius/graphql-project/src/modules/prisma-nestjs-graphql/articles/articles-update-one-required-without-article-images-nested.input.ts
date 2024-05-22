import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { articlesCreateWithoutArticle_imagesInput } from './articles-create-without-article-images.input';
import { Type } from 'class-transformer';
import { articlesCreateOrConnectWithoutArticle_imagesInput } from './articles-create-or-connect-without-article-images.input';
import { articlesUpsertWithoutArticle_imagesInput } from './articles-upsert-without-article-images.input';
import { Prisma } from '@prisma/client';
import { articlesWhereUniqueInput } from './articles-where-unique.input';
import { articlesUpdateToOneWithWhereWithoutArticle_imagesInput } from './articles-update-to-one-with-where-without-article-images.input';

@InputType()
export class articlesUpdateOneRequiredWithoutArticle_imagesNestedInput {

    @Field(() => articlesCreateWithoutArticle_imagesInput, {nullable:true})
    @Type(() => articlesCreateWithoutArticle_imagesInput)
    create?: articlesCreateWithoutArticle_imagesInput;

    @Field(() => articlesCreateOrConnectWithoutArticle_imagesInput, {nullable:true})
    @Type(() => articlesCreateOrConnectWithoutArticle_imagesInput)
    connectOrCreate?: articlesCreateOrConnectWithoutArticle_imagesInput;

    @Field(() => articlesUpsertWithoutArticle_imagesInput, {nullable:true})
    @Type(() => articlesUpsertWithoutArticle_imagesInput)
    upsert?: articlesUpsertWithoutArticle_imagesInput;

    @Field(() => articlesWhereUniqueInput, {nullable:true})
    @Type(() => articlesWhereUniqueInput)
    connect?: Prisma.AtLeast<articlesWhereUniqueInput, 'id'>;

    @Field(() => articlesUpdateToOneWithWhereWithoutArticle_imagesInput, {nullable:true})
    @Type(() => articlesUpdateToOneWithWhereWithoutArticle_imagesInput)
    update?: articlesUpdateToOneWithWhereWithoutArticle_imagesInput;
}
