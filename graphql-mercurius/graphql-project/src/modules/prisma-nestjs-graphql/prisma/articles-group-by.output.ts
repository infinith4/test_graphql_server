import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { articles_status } from './articles-status.enum';
import { ArticlesCountAggregate } from './articles-count-aggregate.output';
import { ArticlesAvgAggregate } from './articles-avg-aggregate.output';
import { ArticlesSumAggregate } from './articles-sum-aggregate.output';
import { ArticlesMinAggregate } from './articles-min-aggregate.output';
import { ArticlesMaxAggregate } from './articles-max-aggregate.output';

@ObjectType()
export class ArticlesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => articles_status, {nullable:true})
    status?: keyof typeof articles_status;

    @Field(() => Int, {nullable:true})
    user_id?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ArticlesCountAggregate, {nullable:true})
    _count?: ArticlesCountAggregate;

    @Field(() => ArticlesAvgAggregate, {nullable:true})
    _avg?: ArticlesAvgAggregate;

    @Field(() => ArticlesSumAggregate, {nullable:true})
    _sum?: ArticlesSumAggregate;

    @Field(() => ArticlesMinAggregate, {nullable:true})
    _min?: ArticlesMinAggregate;

    @Field(() => ArticlesMaxAggregate, {nullable:true})
    _max?: ArticlesMaxAggregate;
}
