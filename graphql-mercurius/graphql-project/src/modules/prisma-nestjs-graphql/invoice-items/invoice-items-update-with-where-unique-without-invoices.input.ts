import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { invoice_itemsWhereUniqueInput } from './invoice-items-where-unique.input';
import { Type } from 'class-transformer';
import { invoice_itemsUpdateWithoutInvoicesInput } from './invoice-items-update-without-invoices.input';

@InputType()
export class invoice_itemsUpdateWithWhereUniqueWithoutInvoicesInput {

    @Field(() => invoice_itemsWhereUniqueInput, {nullable:false})
    @Type(() => invoice_itemsWhereUniqueInput)
    where!: Prisma.AtLeast<invoice_itemsWhereUniqueInput, 'id'>;

    @Field(() => invoice_itemsUpdateWithoutInvoicesInput, {nullable:false})
    @Type(() => invoice_itemsUpdateWithoutInvoicesInput)
    data!: invoice_itemsUpdateWithoutInvoicesInput;
}
