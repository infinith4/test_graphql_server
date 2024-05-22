import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { articlesCountOrderByAggregateInput } from './articles-count-order-by-aggregate.input';
import { articlesAvgOrderByAggregateInput } from './articles-avg-order-by-aggregate.input';
import { articlesMaxOrderByAggregateInput } from './articles-max-order-by-aggregate.input';
import { articlesMinOrderByAggregateInput } from './articles-min-order-by-aggregate.input';
import { articlesSumOrderByAggregateInput } from './articles-sum-order-by-aggregate.input';

@InputType()
export class articlesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    user_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => articlesCountOrderByAggregateInput, {nullable:true})
    _count?: articlesCountOrderByAggregateInput;

    @Field(() => articlesAvgOrderByAggregateInput, {nullable:true})
    _avg?: articlesAvgOrderByAggregateInput;

    @Field(() => articlesMaxOrderByAggregateInput, {nullable:true})
    _max?: articlesMaxOrderByAggregateInput;

    @Field(() => articlesMinOrderByAggregateInput, {nullable:true})
    _min?: articlesMinOrderByAggregateInput;

    @Field(() => articlesSumOrderByAggregateInput, {nullable:true})
    _sum?: articlesSumOrderByAggregateInput;
}
