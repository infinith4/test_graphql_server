import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoicesWhereInput } from './invoices-where.input';
import { Type } from 'class-transformer';
import { invoicesUpdateWithoutInvoice_itemsInput } from './invoices-update-without-invoice-items.input';

@InputType()
export class invoicesUpdateToOneWithWhereWithoutInvoice_itemsInput {

    @Field(() => invoicesWhereInput, {nullable:true})
    @Type(() => invoicesWhereInput)
    where?: invoicesWhereInput;

    @Field(() => invoicesUpdateWithoutInvoice_itemsInput, {nullable:false})
    @Type(() => invoicesUpdateWithoutInvoice_itemsInput)
    data!: invoicesUpdateWithoutInvoice_itemsInput;
}
