import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { invoicesCreateNestedOneWithoutInvoice_itemsInput } from '../invoices/invoices-create-nested-one-without-invoice-items.input';

@InputType()
export class invoice_itemsCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    unit_price!: number;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => invoicesCreateNestedOneWithoutInvoice_itemsInput, {nullable:false})
    invoices!: invoicesCreateNestedOneWithoutInvoice_itemsInput;
}
