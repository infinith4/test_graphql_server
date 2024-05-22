import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { paymentsCountOrderByAggregateInput } from './payments-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { paymentsAvgOrderByAggregateInput } from './payments-avg-order-by-aggregate.input';
import { paymentsMaxOrderByAggregateInput } from './payments-max-order-by-aggregate.input';
import { paymentsMinOrderByAggregateInput } from './payments-min-order-by-aggregate.input';
import { paymentsSumOrderByAggregateInput } from './payments-sum-order-by-aggregate.input';

@InputType()
export class paymentsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    order_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payment_method?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payment_status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => paymentsCountOrderByAggregateInput, {nullable:true})
    @Type(() => paymentsCountOrderByAggregateInput)
    _count?: paymentsCountOrderByAggregateInput;

    @Field(() => paymentsAvgOrderByAggregateInput, {nullable:true})
    @Type(() => paymentsAvgOrderByAggregateInput)
    _avg?: paymentsAvgOrderByAggregateInput;

    @Field(() => paymentsMaxOrderByAggregateInput, {nullable:true})
    @Type(() => paymentsMaxOrderByAggregateInput)
    _max?: paymentsMaxOrderByAggregateInput;

    @Field(() => paymentsMinOrderByAggregateInput, {nullable:true})
    @Type(() => paymentsMinOrderByAggregateInput)
    _min?: paymentsMinOrderByAggregateInput;

    @Field(() => paymentsSumOrderByAggregateInput, {nullable:true})
    @Type(() => paymentsSumOrderByAggregateInput)
    _sum?: paymentsSumOrderByAggregateInput;
}
