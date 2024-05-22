import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { invoicesOrderByWithRelationInput } from '../invoices/invoices-order-by-with-relation.input';

@InputType()
export class invoice_itemsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    invoice_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    unit_price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => invoicesOrderByWithRelationInput, {nullable:true})
    invoices?: invoicesOrderByWithRelationInput;
}
