import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoicesCreateWithoutInvoice_itemsInput } from './invoices-create-without-invoice-items.input';
import { Type } from 'class-transformer';
import { invoicesCreateOrConnectWithoutInvoice_itemsInput } from './invoices-create-or-connect-without-invoice-items.input';
import { Prisma } from '@prisma/client';
import { invoicesWhereUniqueInput } from './invoices-where-unique.input';

@InputType()
export class invoicesCreateNestedOneWithoutInvoice_itemsInput {

    @Field(() => invoicesCreateWithoutInvoice_itemsInput, {nullable:true})
    @Type(() => invoicesCreateWithoutInvoice_itemsInput)
    create?: invoicesCreateWithoutInvoice_itemsInput;

    @Field(() => invoicesCreateOrConnectWithoutInvoice_itemsInput, {nullable:true})
    @Type(() => invoicesCreateOrConnectWithoutInvoice_itemsInput)
    connectOrCreate?: invoicesCreateOrConnectWithoutInvoice_itemsInput;

    @Field(() => invoicesWhereUniqueInput, {nullable:true})
    @Type(() => invoicesWhereUniqueInput)
    connect?: Prisma.AtLeast<invoicesWhereUniqueInput, 'id'>;
}
