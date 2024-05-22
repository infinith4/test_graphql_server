import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ordersCountOrderByAggregateInput } from './orders-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { ordersAvgOrderByAggregateInput } from './orders-avg-order-by-aggregate.input';
import { ordersMaxOrderByAggregateInput } from './orders-max-order-by-aggregate.input';
import { ordersMinOrderByAggregateInput } from './orders-min-order-by-aggregate.input';
import { ordersSumOrderByAggregateInput } from './orders-sum-order-by-aggregate.input';

@InputType()
export class ordersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    user_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => ordersCountOrderByAggregateInput, {nullable:true})
    @Type(() => ordersCountOrderByAggregateInput)
    _count?: ordersCountOrderByAggregateInput;

    @Field(() => ordersAvgOrderByAggregateInput, {nullable:true})
    @Type(() => ordersAvgOrderByAggregateInput)
    _avg?: ordersAvgOrderByAggregateInput;

    @Field(() => ordersMaxOrderByAggregateInput, {nullable:true})
    @Type(() => ordersMaxOrderByAggregateInput)
    _max?: ordersMaxOrderByAggregateInput;

    @Field(() => ordersMinOrderByAggregateInput, {nullable:true})
    @Type(() => ordersMinOrderByAggregateInput)
    _min?: ordersMinOrderByAggregateInput;

    @Field(() => ordersSumOrderByAggregateInput, {nullable:true})
    @Type(() => ordersSumOrderByAggregateInput)
    _sum?: ordersSumOrderByAggregateInput;
}
