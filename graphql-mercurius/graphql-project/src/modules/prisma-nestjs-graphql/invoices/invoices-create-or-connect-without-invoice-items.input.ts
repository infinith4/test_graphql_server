import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { invoicesWhereUniqueInput } from './invoices-where-unique.input';
import { Type } from 'class-transformer';
import { invoicesCreateWithoutInvoice_itemsInput } from './invoices-create-without-invoice-items.input';

@InputType()
export class invoicesCreateOrConnectWithoutInvoice_itemsInput {

    @Field(() => invoicesWhereUniqueInput, {nullable:false})
    @Type(() => invoicesWhereUniqueInput)
    where!: Prisma.AtLeast<invoicesWhereUniqueInput, 'id'>;

    @Field(() => invoicesCreateWithoutInvoice_itemsInput, {nullable:false})
    @Type(() => invoicesCreateWithoutInvoice_itemsInput)
    create!: invoicesCreateWithoutInvoice_itemsInput;
}
