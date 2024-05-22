import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArticlesCountAggregate } from './articles-count-aggregate.output';
import { ArticlesAvgAggregate } from './articles-avg-aggregate.output';
import { ArticlesSumAggregate } from './articles-sum-aggregate.output';
import { ArticlesMinAggregate } from './articles-min-aggregate.output';
import { ArticlesMaxAggregate } from './articles-max-aggregate.output';

@ObjectType()
export class AggregateArticles {

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
