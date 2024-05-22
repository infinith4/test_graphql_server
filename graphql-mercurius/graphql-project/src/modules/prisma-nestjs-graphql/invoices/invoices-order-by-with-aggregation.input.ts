import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { invoicesCountOrderByAggregateInput } from './invoices-count-order-by-aggregate.input';
import { invoicesAvgOrderByAggregateInput } from './invoices-avg-order-by-aggregate.input';
import { invoicesMaxOrderByAggregateInput } from './invoices-max-order-by-aggregate.input';
import { invoicesMinOrderByAggregateInput } from './invoices-min-order-by-aggregate.input';
import { invoicesSumOrderByAggregateInput } from './invoices-sum-order-by-aggregate.input';

@InputType()
export class invoicesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customer_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    invoice_date?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    billing_address?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    billing_city?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    billing_state?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    billing_country_code?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    billing_postal_code?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    total?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => invoicesCountOrderByAggregateInput, {nullable:true})
    _count?: invoicesCountOrderByAggregateInput;

    @Field(() => invoicesAvgOrderByAggregateInput, {nullable:true})
    _avg?: invoicesAvgOrderByAggregateInput;

    @Field(() => invoicesMaxOrderByAggregateInput, {nullable:true})
    _max?: invoicesMaxOrderByAggregateInput;

    @Field(() => invoicesMinOrderByAggregateInput, {nullable:true})
    _min?: invoicesMinOrderByAggregateInput;

    @Field(() => invoicesSumOrderByAggregateInput, {nullable:true})
    _sum?: invoicesSumOrderByAggregateInput;
}
