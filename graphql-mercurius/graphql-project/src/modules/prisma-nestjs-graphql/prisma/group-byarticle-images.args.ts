import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { article_imagesWhereInput } from '../article-images/article-images-where.input';
import { Type } from 'class-transformer';
import { article_imagesOrderByWithAggregationInput } from '../article-images/article-images-order-by-with-aggregation.input';
import { Article_imagesScalarFieldEnum } from './article-images-scalar-field.enum';
import { article_imagesScalarWhereWithAggregatesInput } from '../article-images/article-images-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByarticleImagesArgs {

    @Field(() => article_imagesWhereInput, {nullable:true})
    @Type(() => article_imagesWhereInput)
    where?: article_imagesWhereInput;

    @Field(() => [article_imagesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<article_imagesOrderByWithAggregationInput>;

    @Field(() => [Article_imagesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Article_imagesScalarFieldEnum>;

    @Field(() => article_imagesScalarWhereWithAggregatesInput, {nullable:true})
    having?: article_imagesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
