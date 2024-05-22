import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Product_categoriesCountAggregate } from './product-categories-count-aggregate.output';
import { Product_categoriesAvgAggregate } from './product-categories-avg-aggregate.output';
import { Product_categoriesSumAggregate } from './product-categories-sum-aggregate.output';
import { Product_categoriesMinAggregate } from './product-categories-min-aggregate.output';
import { Product_categoriesMaxAggregate } from './product-categories-max-aggregate.output';

@ObjectType()
export class AggregateProduct_categories {

    @Field(() => Product_categoriesCountAggregate, {nullable:true})
    _count?: Product_categoriesCountAggregate;

    @Field(() => Product_categoriesAvgAggregate, {nullable:true})
    _avg?: Product_categoriesAvgAggregate;

    @Field(() => Product_categoriesSumAggregate, {nullable:true})
    _sum?: Product_categoriesSumAggregate;

    @Field(() => Product_categoriesMinAggregate, {nullable:true})
    _min?: Product_categoriesMinAggregate;

    @Field(() => Product_categoriesMaxAggregate, {nullable:true})
    _max?: Product_categoriesMaxAggregate;
}
