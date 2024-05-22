import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { article_imagesWhereInput } from '../article-images/article-images-where.input';
import { Type } from 'class-transformer';
import { article_imagesOrderByWithRelationInput } from '../article-images/article-images-order-by-with-relation.input';
import { article_imagesWhereUniqueInput } from '../article-images/article-images-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Article_imagesScalarFieldEnum } from './article-images-scalar-field.enum';

@ArgsType()
export class FindFirstarticleImagesOrThrowArgs {

    @Field(() => article_imagesWhereInput, {nullable:true})
    @Type(() => article_imagesWhereInput)
    where?: article_imagesWhereInput;

    @Field(() => [article_imagesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<article_imagesOrderByWithRelationInput>;

    @Field(() => article_imagesWhereUniqueInput, {nullable:true})
    cursor?: article_imagesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Article_imagesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Article_imagesScalarFieldEnum>;
}
