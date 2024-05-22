import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { cart_itemsCountOrderByAggregateInput } from './cart-items-count-order-by-aggregate.input';
import { cart_itemsAvgOrderByAggregateInput } from './cart-items-avg-order-by-aggregate.input';
import { cart_itemsMaxOrderByAggregateInput } from './cart-items-max-order-by-aggregate.input';
import { cart_itemsMinOrderByAggregateInput } from './cart-items-min-order-by-aggregate.input';
import { cart_itemsSumOrderByAggregateInput } from './cart-items-sum-order-by-aggregate.input';

@InputType()
export class cart_itemsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    cart_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    product_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => cart_itemsCountOrderByAggregateInput, {nullable:true})
    _count?: cart_itemsCountOrderByAggregateInput;

    @Field(() => cart_itemsAvgOrderByAggregateInput, {nullable:true})
    _avg?: cart_itemsAvgOrderByAggregateInput;

    @Field(() => cart_itemsMaxOrderByAggregateInput, {nullable:true})
    _max?: cart_itemsMaxOrderByAggregateInput;

    @Field(() => cart_itemsMinOrderByAggregateInput, {nullable:true})
    _min?: cart_itemsMinOrderByAggregateInput;

    @Field(() => cart_itemsSumOrderByAggregateInput, {nullable:true})
    _sum?: cart_itemsSumOrderByAggregateInput;
}
