import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoicesCreateWithoutInvoice_itemsInput } from './invoices-create-without-invoice-items.input';
import { Type } from 'class-transformer';
import { invoicesCreateOrConnectWithoutInvoice_itemsInput } from './invoices-create-or-connect-without-invoice-items.input';
import { invoicesUpsertWithoutInvoice_itemsInput } from './invoices-upsert-without-invoice-items.input';
import { Prisma } from '@prisma/client';
import { invoicesWhereUniqueInput } from './invoices-where-unique.input';
import { invoicesUpdateToOneWithWhereWithoutInvoice_itemsInput } from './invoices-update-to-one-with-where-without-invoice-items.input';

@InputType()
export class invoicesUpdateOneRequiredWithoutInvoice_itemsNestedInput {

    @Field(() => invoicesCreateWithoutInvoice_itemsInput, {nullable:true})
    @Type(() => invoicesCreateWithoutInvoice_itemsInput)
    create?: invoicesCreateWithoutInvoice_itemsInput;

    @Field(() => invoicesCreateOrConnectWithoutInvoice_itemsInput, {nullable:true})
    @Type(() => invoicesCreateOrConnectWithoutInvoice_itemsInput)
    connectOrCreate?: invoicesCreateOrConnectWithoutInvoice_itemsInput;

    @Field(() => invoicesUpsertWithoutInvoice_itemsInput, {nullable:true})
    @Type(() => invoicesUpsertWithoutInvoice_itemsInput)
    upsert?: invoicesUpsertWithoutInvoice_itemsInput;

    @Field(() => invoicesWhereUniqueInput, {nullable:true})
    @Type(() => invoicesWhereUniqueInput)
    connect?: Prisma.AtLeast<invoicesWhereUniqueInput, 'id'>;

    @Field(() => invoicesUpdateToOneWithWhereWithoutInvoice_itemsInput, {nullable:true})
    @Type(() => invoicesUpdateToOneWithWhereWithoutInvoice_itemsInput)
    update?: invoicesUpdateToOneWithWhereWithoutInvoice_itemsInput;
}
