import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Article_imagesCountAggregate } from './article-images-count-aggregate.output';
import { Article_imagesAvgAggregate } from './article-images-avg-aggregate.output';
import { Article_imagesSumAggregate } from './article-images-sum-aggregate.output';
import { Article_imagesMinAggregate } from './article-images-min-aggregate.output';
import { Article_imagesMaxAggregate } from './article-images-max-aggregate.output';

@ObjectType()
export class AggregateArticle_images {

    @Field(() => Article_imagesCountAggregate, {nullable:true})
    _count?: Article_imagesCountAggregate;

    @Field(() => Article_imagesAvgAggregate, {nullable:true})
    _avg?: Article_imagesAvgAggregate;

    @Field(() => Article_imagesSumAggregate, {nullable:true})
    _sum?: Article_imagesSumAggregate;

    @Field(() => Article_imagesMinAggregate, {nullable:true})
    _min?: Article_imagesMinAggregate;

    @Field(() => Article_imagesMaxAggregate, {nullable:true})
    _max?: Article_imagesMaxAggregate;
}
