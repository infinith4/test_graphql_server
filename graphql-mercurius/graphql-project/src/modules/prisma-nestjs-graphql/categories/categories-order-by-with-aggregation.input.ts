import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { categoriesCountOrderByAggregateInput } from './categories-count-order-by-aggregate.input';
import { categoriesAvgOrderByAggregateInput } from './categories-avg-order-by-aggregate.input';
import { categoriesMaxOrderByAggregateInput } from './categories-max-order-by-aggregate.input';
import { categoriesMinOrderByAggregateInput } from './categories-min-order-by-aggregate.input';
import { categoriesSumOrderByAggregateInput } from './categories-sum-order-by-aggregate.input';

@InputType()
export class categoriesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => categoriesCountOrderByAggregateInput, {nullable:true})
    _count?: categoriesCountOrderByAggregateInput;

    @Field(() => categoriesAvgOrderByAggregateInput, {nullable:true})
    _avg?: categoriesAvgOrderByAggregateInput;

    @Field(() => categoriesMaxOrderByAggregateInput, {nullable:true})
    _max?: categoriesMaxOrderByAggregateInput;

    @Field(() => categoriesMinOrderByAggregateInput, {nullable:true})
    _min?: categoriesMinOrderByAggregateInput;

    @Field(() => categoriesSumOrderByAggregateInput, {nullable:true})
    _sum?: categoriesSumOrderByAggregateInput;
}
