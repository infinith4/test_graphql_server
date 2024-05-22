import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoice_itemsCreateWithoutInvoicesInput } from './invoice-items-create-without-invoices.input';
import { Type } from 'class-transformer';
import { invoice_itemsCreateOrConnectWithoutInvoicesInput } from './invoice-items-create-or-connect-without-invoices.input';
import { invoice_itemsUpsertWithWhereUniqueWithoutInvoicesInput } from './invoice-items-upsert-with-where-unique-without-invoices.input';
import { invoice_itemsCreateManyInvoicesInputEnvelope } from './invoice-items-create-many-invoices-input-envelope.input';
import { Prisma } from '@prisma/client';
import { invoice_itemsWhereUniqueInput } from './invoice-items-where-unique.input';
import { invoice_itemsUpdateWithWhereUniqueWithoutInvoicesInput } from './invoice-items-update-with-where-unique-without-invoices.input';
import { invoice_itemsUpdateManyWithWhereWithoutInvoicesInput } from './invoice-items-update-many-with-where-without-invoices.input';
import { invoice_itemsScalarWhereInput } from './invoice-items-scalar-where.input';

@InputType()
export class invoice_itemsUncheckedUpdateManyWithoutInvoicesNestedInput {

    @Field(() => [invoice_itemsCreateWithoutInvoicesInput], {nullable:true})
    @Type(() => invoice_itemsCreateWithoutInvoicesInput)
    create?: Array<invoice_itemsCreateWithoutInvoicesInput>;

    @Field(() => [invoice_itemsCreateOrConnectWithoutInvoicesInput], {nullable:true})
    @Type(() => invoice_itemsCreateOrConnectWithoutInvoicesInput)
    connectOrCreate?: Array<invoice_itemsCreateOrConnectWithoutInvoicesInput>;

    @Field(() => [invoice_itemsUpsertWithWhereUniqueWithoutInvoicesInput], {nullable:true})
    @Type(() => invoice_itemsUpsertWithWhereUniqueWithoutInvoicesInput)
    upsert?: Array<invoice_itemsUpsertWithWhereUniqueWithoutInvoicesInput>;

    @Field(() => invoice_itemsCreateManyInvoicesInputEnvelope, {nullable:true})
    @Type(() => invoice_itemsCreateManyInvoicesInputEnvelope)
    createMany?: invoice_itemsCreateManyInvoicesInputEnvelope;

    @Field(() => [invoice_itemsWhereUniqueInput], {nullable:true})
    @Type(() => invoice_itemsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<invoice_itemsWhereUniqueInput, 'id'>>;

    @Field(() => [invoice_itemsWhereUniqueInput], {nullable:true})
    @Type(() => invoice_itemsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<invoice_itemsWhereUniqueInput, 'id'>>;

    @Field(() => [invoice_itemsWhereUniqueInput], {nullable:true})
    @Type(() => invoice_itemsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<invoice_itemsWhereUniqueInput, 'id'>>;

    @Field(() => [invoice_itemsWhereUniqueInput], {nullable:true})
    @Type(() => invoice_itemsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<invoice_itemsWhereUniqueInput, 'id'>>;

    @Field(() => [invoice_itemsUpdateWithWhereUniqueWithoutInvoicesInput], {nullable:true})
    @Type(() => invoice_itemsUpdateWithWhereUniqueWithoutInvoicesInput)
    update?: Array<invoice_itemsUpdateWithWhereUniqueWithoutInvoicesInput>;

    @Field(() => [invoice_itemsUpdateManyWithWhereWithoutInvoicesInput], {nullable:true})
    @Type(() => invoice_itemsUpdateManyWithWhereWithoutInvoicesInput)
    updateMany?: Array<invoice_itemsUpdateManyWithWhereWithoutInvoicesInput>;

    @Field(() => [invoice_itemsScalarWhereInput], {nullable:true})
    @Type(() => invoice_itemsScalarWhereInput)
    deleteMany?: Array<invoice_itemsScalarWhereInput>;
}
