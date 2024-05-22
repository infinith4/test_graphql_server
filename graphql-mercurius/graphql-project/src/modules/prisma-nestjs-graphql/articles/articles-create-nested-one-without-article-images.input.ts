import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { articlesCreateWithoutArticle_imagesInput } from './articles-create-without-article-images.input';
import { Type } from 'class-transformer';
import { articlesCreateOrConnectWithoutArticle_imagesInput } from './articles-create-or-connect-without-article-images.input';
import { Prisma } from '@prisma/client';
import { articlesWhereUniqueInput } from './articles-where-unique.input';

@InputType()
export class articlesCreateNestedOneWithoutArticle_imagesInput {

    @Field(() => articlesCreateWithoutArticle_imagesInput, {nullable:true})
    @Type(() => articlesCreateWithoutArticle_imagesInput)
    create?: articlesCreateWithoutArticle_imagesInput;

    @Field(() => articlesCreateOrConnectWithoutArticle_imagesInput, {nullable:true})
    @Type(() => articlesCreateOrConnectWithoutArticle_imagesInput)
    connectOrCreate?: articlesCreateOrConnectWithoutArticle_imagesInput;

    @Field(() => articlesWhereUniqueInput, {nullable:true})
    @Type(() => articlesWhereUniqueInput)
    connect?: Prisma.AtLeast<articlesWhereUniqueInput, 'id'>;
}
