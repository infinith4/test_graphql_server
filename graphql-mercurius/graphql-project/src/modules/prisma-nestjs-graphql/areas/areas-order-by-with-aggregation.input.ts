import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { areasCountOrderByAggregateInput } from './areas-count-order-by-aggregate.input';
import { areasAvgOrderByAggregateInput } from './areas-avg-order-by-aggregate.input';
import { areasMaxOrderByAggregateInput } from './areas-max-order-by-aggregate.input';
import { areasMinOrderByAggregateInput } from './areas-min-order-by-aggregate.input';
import { areasSumOrderByAggregateInput } from './areas-sum-order-by-aggregate.input';

@InputType()
export class areasOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    name?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    employee_id?: SortOrderInput;

    @Field(() => areasCountOrderByAggregateInput, {nullable:true})
    _count?: areasCountOrderByAggregateInput;

    @Field(() => areasAvgOrderByAggregateInput, {nullable:true})
    _avg?: areasAvgOrderByAggregateInput;

    @Field(() => areasMaxOrderByAggregateInput, {nullable:true})
    _max?: areasMaxOrderByAggregateInput;

    @Field(() => areasMinOrderByAggregateInput, {nullable:true})
    _min?: areasMinOrderByAggregateInput;

    @Field(() => areasSumOrderByAggregateInput, {nullable:true})
    _sum?: areasSumOrderByAggregateInput;
}
