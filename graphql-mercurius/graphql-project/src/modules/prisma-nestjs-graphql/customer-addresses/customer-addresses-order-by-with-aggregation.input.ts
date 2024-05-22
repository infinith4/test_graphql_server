import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { customer_addressesCountOrderByAggregateInput } from './customer-addresses-count-order-by-aggregate.input';
import { customer_addressesAvgOrderByAggregateInput } from './customer-addresses-avg-order-by-aggregate.input';
import { customer_addressesMaxOrderByAggregateInput } from './customer-addresses-max-order-by-aggregate.input';
import { customer_addressesMinOrderByAggregateInput } from './customer-addresses-min-order-by-aggregate.input';
import { customer_addressesSumOrderByAggregateInput } from './customer-addresses-sum-order-by-aggregate.input';

@InputType()
export class customer_addressesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customer_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address_line1?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    address_line2?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    state?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postal_code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => customer_addressesCountOrderByAggregateInput, {nullable:true})
    _count?: customer_addressesCountOrderByAggregateInput;

    @Field(() => customer_addressesAvgOrderByAggregateInput, {nullable:true})
    _avg?: customer_addressesAvgOrderByAggregateInput;

    @Field(() => customer_addressesMaxOrderByAggregateInput, {nullable:true})
    _max?: customer_addressesMaxOrderByAggregateInput;

    @Field(() => customer_addressesMinOrderByAggregateInput, {nullable:true})
    _min?: customer_addressesMinOrderByAggregateInput;

    @Field(() => customer_addressesSumOrderByAggregateInput, {nullable:true})
    _sum?: customer_addressesSumOrderByAggregateInput;
}
