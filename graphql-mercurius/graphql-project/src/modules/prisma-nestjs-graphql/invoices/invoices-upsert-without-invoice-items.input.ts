import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoicesUpdateWithoutInvoice_itemsInput } from './invoices-update-without-invoice-items.input';
import { Type } from 'class-transformer';
import { invoicesCreateWithoutInvoice_itemsInput } from './invoices-create-without-invoice-items.input';
import { invoicesWhereInput } from './invoices-where.input';

@InputType()
export class invoicesUpsertWithoutInvoice_itemsInput {

    @Field(() => invoicesUpdateWithoutInvoice_itemsInput, {nullable:false})
    @Type(() => invoicesUpdateWithoutInvoice_itemsInput)
    update!: invoicesUpdateWithoutInvoice_itemsInput;

    @Field(() => invoicesCreateWithoutInvoice_itemsInput, {nullable:false})
    @Type(() => invoicesCreateWithoutInvoice_itemsInput)
    create!: invoicesCreateWithoutInvoice_itemsInput;

    @Field(() => invoicesWhereInput, {nullable:true})
    @Type(() => invoicesWhereInput)
    where?: invoicesWhereInput;
}
