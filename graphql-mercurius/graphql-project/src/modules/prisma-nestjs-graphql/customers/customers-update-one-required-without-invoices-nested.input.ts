import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersCreateWithoutInvoicesInput } from './customers-create-without-invoices.input';
import { Type } from 'class-transformer';
import { customersCreateOrConnectWithoutInvoicesInput } from './customers-create-or-connect-without-invoices.input';
import { customersUpsertWithoutInvoicesInput } from './customers-upsert-without-invoices.input';
import { Prisma } from '@prisma/client';
import { customersWhereUniqueInput } from './customers-where-unique.input';
import { customersUpdateToOneWithWhereWithoutInvoicesInput } from './customers-update-to-one-with-where-without-invoices.input';

@InputType()
export class customersUpdateOneRequiredWithoutInvoicesNestedInput {

    @Field(() => customersCreateWithoutInvoicesInput, {nullable:true})
    @Type(() => customersCreateWithoutInvoicesInput)
    create?: customersCreateWithoutInvoicesInput;

    @Field(() => customersCreateOrConnectWithoutInvoicesInput, {nullable:true})
    @Type(() => customersCreateOrConnectWithoutInvoicesInput)
    connectOrCreate?: customersCreateOrConnectWithoutInvoicesInput;

    @Field(() => customersUpsertWithoutInvoicesInput, {nullable:true})
    @Type(() => customersUpsertWithoutInvoicesInput)
    upsert?: customersUpsertWithoutInvoicesInput;

    @Field(() => customersWhereUniqueInput, {nullable:true})
    @Type(() => customersWhereUniqueInput)
    connect?: Prisma.AtLeast<customersWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => customersUpdateToOneWithWhereWithoutInvoicesInput, {nullable:true})
    @Type(() => customersUpdateToOneWithWhereWithoutInvoicesInput)
    update?: customersUpdateToOneWithWhereWithoutInvoicesInput;
}
