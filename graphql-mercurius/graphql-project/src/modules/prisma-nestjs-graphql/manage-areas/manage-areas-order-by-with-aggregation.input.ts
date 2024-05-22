import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { manage_areasCountOrderByAggregateInput } from './manage-areas-count-order-by-aggregate.input';
import { manage_areasAvgOrderByAggregateInput } from './manage-areas-avg-order-by-aggregate.input';
import { manage_areasMaxOrderByAggregateInput } from './manage-areas-max-order-by-aggregate.input';
import { manage_areasMinOrderByAggregateInput } from './manage-areas-min-order-by-aggregate.input';
import { manage_areasSumOrderByAggregateInput } from './manage-areas-sum-order-by-aggregate.input';

@InputType()
export class manage_areasOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    area_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employee_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => manage_areasCountOrderByAggregateInput, {nullable:true})
    _count?: manage_areasCountOrderByAggregateInput;

    @Field(() => manage_areasAvgOrderByAggregateInput, {nullable:true})
    _avg?: manage_areasAvgOrderByAggregateInput;

    @Field(() => manage_areasMaxOrderByAggregateInput, {nullable:true})
    _max?: manage_areasMaxOrderByAggregateInput;

    @Field(() => manage_areasMinOrderByAggregateInput, {nullable:true})
    _min?: manage_areasMinOrderByAggregateInput;

    @Field(() => manage_areasSumOrderByAggregateInput, {nullable:true})
    _sum?: manage_areasSumOrderByAggregateInput;
}
