import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersUpdateWithoutInvoicesInput } from './customers-update-without-invoices.input';
import { Type } from 'class-transformer';
import { customersCreateWithoutInvoicesInput } from './customers-create-without-invoices.input';
import { customersWhereInput } from './customers-where.input';

@InputType()
export class customersUpsertWithoutInvoicesInput {

    @Field(() => customersUpdateWithoutInvoicesInput, {nullable:false})
    @Type(() => customersUpdateWithoutInvoicesInput)
    update!: customersUpdateWithoutInvoicesInput;

    @Field(() => customersCreateWithoutInvoicesInput, {nullable:false})
    @Type(() => customersCreateWithoutInvoicesInput)
    create!: customersCreateWithoutInvoicesInput;

    @Field(() => customersWhereInput, {nullable:true})
    @Type(() => customersWhereInput)
    where?: customersWhereInput;
}
