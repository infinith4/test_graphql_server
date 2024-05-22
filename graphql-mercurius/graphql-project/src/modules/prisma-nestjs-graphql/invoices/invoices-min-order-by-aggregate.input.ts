import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class invoicesMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customer_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    invoice_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    billing_address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    billing_city?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    billing_state?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    billing_country_code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    billing_postal_code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;
}
