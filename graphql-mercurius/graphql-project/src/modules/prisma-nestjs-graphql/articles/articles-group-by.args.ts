import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { articlesWhereInput } from './articles-where.input';
import { Type } from 'class-transformer';
import { articlesOrderByWithAggregationInput } from './articles-order-by-with-aggregation.input';
import { ArticlesScalarFieldEnum } from '../prisma/articles-scalar-field.enum';
import { articlesScalarWhereWithAggregatesInput } from './articles-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class articlesGroupByArgs {

    @Field(() => articlesWhereInput, {nullable:true})
    @Type(() => articlesWhereInput)
    where?: articlesWhereInput;

    @Field(() => [articlesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<articlesOrderByWithAggregationInput>;

    @Field(() => [ArticlesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ArticlesScalarFieldEnum>;

    @Field(() => articlesScalarWhereWithAggregatesInput, {nullable:true})
    having?: articlesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
