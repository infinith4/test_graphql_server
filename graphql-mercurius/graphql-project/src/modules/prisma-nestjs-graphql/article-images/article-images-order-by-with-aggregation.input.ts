import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { article_imagesCountOrderByAggregateInput } from './article-images-count-order-by-aggregate.input';
import { article_imagesAvgOrderByAggregateInput } from './article-images-avg-order-by-aggregate.input';
import { article_imagesMaxOrderByAggregateInput } from './article-images-max-order-by-aggregate.input';
import { article_imagesMinOrderByAggregateInput } from './article-images-min-order-by-aggregate.input';
import { article_imagesSumOrderByAggregateInput } from './article-images-sum-order-by-aggregate.input';

@InputType()
export class article_imagesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    url?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    article_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => article_imagesCountOrderByAggregateInput, {nullable:true})
    _count?: article_imagesCountOrderByAggregateInput;

    @Field(() => article_imagesAvgOrderByAggregateInput, {nullable:true})
    _avg?: article_imagesAvgOrderByAggregateInput;

    @Field(() => article_imagesMaxOrderByAggregateInput, {nullable:true})
    _max?: article_imagesMaxOrderByAggregateInput;

    @Field(() => article_imagesMinOrderByAggregateInput, {nullable:true})
    _min?: article_imagesMinOrderByAggregateInput;

    @Field(() => article_imagesSumOrderByAggregateInput, {nullable:true})
    _sum?: article_imagesSumOrderByAggregateInput;
}
