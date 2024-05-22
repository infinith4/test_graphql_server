import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { cartsCountOrderByAggregateInput } from './carts-count-order-by-aggregate.input';
import { cartsAvgOrderByAggregateInput } from './carts-avg-order-by-aggregate.input';
import { cartsMaxOrderByAggregateInput } from './carts-max-order-by-aggregate.input';
import { cartsMinOrderByAggregateInput } from './carts-min-order-by-aggregate.input';
import { cartsSumOrderByAggregateInput } from './carts-sum-order-by-aggregate.input';

@InputType()
export class cartsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    user_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => cartsCountOrderByAggregateInput, {nullable:true})
    _count?: cartsCountOrderByAggregateInput;

    @Field(() => cartsAvgOrderByAggregateInput, {nullable:true})
    _avg?: cartsAvgOrderByAggregateInput;

    @Field(() => cartsMaxOrderByAggregateInput, {nullable:true})
    _max?: cartsMaxOrderByAggregateInput;

    @Field(() => cartsMinOrderByAggregateInput, {nullable:true})
    _min?: cartsMinOrderByAggregateInput;

    @Field(() => cartsSumOrderByAggregateInput, {nullable:true})
    _sum?: cartsSumOrderByAggregateInput;
}
