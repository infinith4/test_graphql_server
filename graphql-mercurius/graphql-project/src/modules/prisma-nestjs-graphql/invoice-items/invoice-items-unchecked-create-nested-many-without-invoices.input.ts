import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoice_itemsCreateWithoutInvoicesInput } from './invoice-items-create-without-invoices.input';
import { Type } from 'class-transformer';
import { invoice_itemsCreateOrConnectWithoutInvoicesInput } from './invoice-items-create-or-connect-without-invoices.input';
import { invoice_itemsCreateManyInvoicesInputEnvelope } from './invoice-items-create-many-invoices-input-envelope.input';
import { Prisma } from '@prisma/client';
import { invoice_itemsWhereUniqueInput } from './invoice-items-where-unique.input';

@InputType()
export class invoice_itemsUncheckedCreateNestedManyWithoutInvoicesInput {

    @Field(() => [invoice_itemsCreateWithoutInvoicesInput], {nullable:true})
    @Type(() => invoice_itemsCreateWithoutInvoicesInput)
    create?: Array<invoice_itemsCreateWithoutInvoicesInput>;

    @Field(() => [invoice_itemsCreateOrConnectWithoutInvoicesInput], {nullable:true})
    @Type(() => invoice_itemsCreateOrConnectWithoutInvoicesInput)
    connectOrCreate?: Array<invoice_itemsCreateOrConnectWithoutInvoicesInput>;

    @Field(() => invoice_itemsCreateManyInvoicesInputEnvelope, {nullable:true})
    @Type(() => invoice_itemsCreateManyInvoicesInputEnvelope)
    createMany?: invoice_itemsCreateManyInvoicesInputEnvelope;

    @Field(() => [invoice_itemsWhereUniqueInput], {nullable:true})
    @Type(() => invoice_itemsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<invoice_itemsWhereUniqueInput, 'id'>>;
}
