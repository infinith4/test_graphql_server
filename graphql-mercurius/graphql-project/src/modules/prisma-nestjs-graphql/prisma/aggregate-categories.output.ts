import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CategoriesCountAggregate } from './categories-count-aggregate.output';
import { CategoriesAvgAggregate } from './categories-avg-aggregate.output';
import { CategoriesSumAggregate } from './categories-sum-aggregate.output';
import { CategoriesMinAggregate } from './categories-min-aggregate.output';
import { CategoriesMaxAggregate } from './categories-max-aggregate.output';

@ObjectType()
export class AggregateCategories {

    @Field(() => CategoriesCountAggregate, {nullable:true})
    _count?: CategoriesCountAggregate;

    @Field(() => CategoriesAvgAggregate, {nullable:true})
    _avg?: CategoriesAvgAggregate;

    @Field(() => CategoriesSumAggregate, {nullable:true})
    _sum?: CategoriesSumAggregate;

    @Field(() => CategoriesMinAggregate, {nullable:true})
    _min?: CategoriesMinAggregate;

    @Field(() => CategoriesMaxAggregate, {nullable:true})
    _max?: CategoriesMaxAggregate;
}
