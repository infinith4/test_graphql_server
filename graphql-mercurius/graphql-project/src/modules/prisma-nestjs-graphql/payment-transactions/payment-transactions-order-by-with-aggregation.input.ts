import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { payment_transactionsCountOrderByAggregateInput } from './payment-transactions-count-order-by-aggregate.input';
import { payment_transactionsAvgOrderByAggregateInput } from './payment-transactions-avg-order-by-aggregate.input';
import { payment_transactionsMaxOrderByAggregateInput } from './payment-transactions-max-order-by-aggregate.input';
import { payment_transactionsMinOrderByAggregateInput } from './payment-transactions-min-order-by-aggregate.input';
import { payment_transactionsSumOrderByAggregateInput } from './payment-transactions-sum-order-by-aggregate.input';

@InputType()
export class payment_transactionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    amount?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    payment_method?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transaction_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => payment_transactionsCountOrderByAggregateInput, {nullable:true})
    _count?: payment_transactionsCountOrderByAggregateInput;

    @Field(() => payment_transactionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: payment_transactionsAvgOrderByAggregateInput;

    @Field(() => payment_transactionsMaxOrderByAggregateInput, {nullable:true})
    _max?: payment_transactionsMaxOrderByAggregateInput;

    @Field(() => payment_transactionsMinOrderByAggregateInput, {nullable:true})
    _min?: payment_transactionsMinOrderByAggregateInput;

    @Field(() => payment_transactionsSumOrderByAggregateInput, {nullable:true})
    _sum?: payment_transactionsSumOrderByAggregateInput;
}
