import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoice_itemsCreateManyInvoicesInput } from './invoice-items-create-many-invoices.input';
import { Type } from 'class-transformer';

@InputType()
export class invoice_itemsCreateManyInvoicesInputEnvelope {

    @Field(() => [invoice_itemsCreateManyInvoicesInput], {nullable:false})
    @Type(() => invoice_itemsCreateManyInvoicesInput)
    data!: Array<invoice_itemsCreateManyInvoicesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
