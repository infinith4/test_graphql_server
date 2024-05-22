import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { customersCountOrderByAggregateInput } from './customers-count-order-by-aggregate.input';
import { customersAvgOrderByAggregateInput } from './customers-avg-order-by-aggregate.input';
import { customersMaxOrderByAggregateInput } from './customers-max-order-by-aggregate.input';
import { customersMinOrderByAggregateInput } from './customers-min-order-by-aggregate.input';
import { customersSumOrderByAggregateInput } from './customers-sum-order-by-aggregate.input';

@InputType()
export class customersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    address?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    phone?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => customersCountOrderByAggregateInput, {nullable:true})
    _count?: customersCountOrderByAggregateInput;

    @Field(() => customersAvgOrderByAggregateInput, {nullable:true})
    _avg?: customersAvgOrderByAggregateInput;

    @Field(() => customersMaxOrderByAggregateInput, {nullable:true})
    _max?: customersMaxOrderByAggregateInput;

    @Field(() => customersMinOrderByAggregateInput, {nullable:true})
    _min?: customersMinOrderByAggregateInput;

    @Field(() => customersSumOrderByAggregateInput, {nullable:true})
    _sum?: customersSumOrderByAggregateInput;
}
