import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { invoice_itemsOrderByRelationAggregateInput } from '../invoice-items/invoice-items-order-by-relation-aggregate.input';
import { customersOrderByWithRelationInput } from '../customers/customers-order-by-with-relation.input';

@InputType()
export class invoicesOrderByWithRelationInput {

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

    @Field(() => invoice_itemsOrderByRelationAggregateInput, {nullable:true})
    invoice_items?: invoice_itemsOrderByRelationAggregateInput;

    @Field(() => customersOrderByWithRelationInput, {nullable:true})
    customers?: customersOrderByWithRelationInput;
}
