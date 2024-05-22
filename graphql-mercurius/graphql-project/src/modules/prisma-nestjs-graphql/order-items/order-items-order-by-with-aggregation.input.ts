import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { order_itemsCountOrderByAggregateInput } from './order-items-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { order_itemsAvgOrderByAggregateInput } from './order-items-avg-order-by-aggregate.input';
import { order_itemsMaxOrderByAggregateInput } from './order-items-max-order-by-aggregate.input';
import { order_itemsMinOrderByAggregateInput } from './order-items-min-order-by-aggregate.input';
import { order_itemsSumOrderByAggregateInput } from './order-items-sum-order-by-aggregate.input';

@InputType()
export class order_itemsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    order_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    product_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => order_itemsCountOrderByAggregateInput, {nullable:true})
    @Type(() => order_itemsCountOrderByAggregateInput)
    _count?: order_itemsCountOrderByAggregateInput;

    @Field(() => order_itemsAvgOrderByAggregateInput, {nullable:true})
    @Type(() => order_itemsAvgOrderByAggregateInput)
    _avg?: order_itemsAvgOrderByAggregateInput;

    @Field(() => order_itemsMaxOrderByAggregateInput, {nullable:true})
    @Type(() => order_itemsMaxOrderByAggregateInput)
    _max?: order_itemsMaxOrderByAggregateInput;

    @Field(() => order_itemsMinOrderByAggregateInput, {nullable:true})
    @Type(() => order_itemsMinOrderByAggregateInput)
    _min?: order_itemsMinOrderByAggregateInput;

    @Field(() => order_itemsSumOrderByAggregateInput, {nullable:true})
    @Type(() => order_itemsSumOrderByAggregateInput)
    _sum?: order_itemsSumOrderByAggregateInput;
}
