import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { merchantsCountOrderByAggregateInput } from './merchants-count-order-by-aggregate.input';
import { merchantsAvgOrderByAggregateInput } from './merchants-avg-order-by-aggregate.input';
import { merchantsMaxOrderByAggregateInput } from './merchants-max-order-by-aggregate.input';
import { merchantsMinOrderByAggregateInput } from './merchants-min-order-by-aggregate.input';
import { merchantsSumOrderByAggregateInput } from './merchants-sum-order-by-aggregate.input';

@InputType()
export class merchantsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    name?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    admin_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    country_code?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => merchantsCountOrderByAggregateInput, {nullable:true})
    _count?: merchantsCountOrderByAggregateInput;

    @Field(() => merchantsAvgOrderByAggregateInput, {nullable:true})
    _avg?: merchantsAvgOrderByAggregateInput;

    @Field(() => merchantsMaxOrderByAggregateInput, {nullable:true})
    _max?: merchantsMaxOrderByAggregateInput;

    @Field(() => merchantsMinOrderByAggregateInput, {nullable:true})
    _min?: merchantsMinOrderByAggregateInput;

    @Field(() => merchantsSumOrderByAggregateInput, {nullable:true})
    _sum?: merchantsSumOrderByAggregateInput;
}
