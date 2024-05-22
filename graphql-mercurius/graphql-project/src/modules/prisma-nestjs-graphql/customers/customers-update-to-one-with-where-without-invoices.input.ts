import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersWhereInput } from './customers-where.input';
import { Type } from 'class-transformer';
import { customersUpdateWithoutInvoicesInput } from './customers-update-without-invoices.input';

@InputType()
export class customersUpdateToOneWithWhereWithoutInvoicesInput {

    @Field(() => customersWhereInput, {nullable:true})
    @Type(() => customersWhereInput)
    where?: customersWhereInput;

    @Field(() => customersUpdateWithoutInvoicesInput, {nullable:false})
    @Type(() => customersUpdateWithoutInvoicesInput)
    data!: customersUpdateWithoutInvoicesInput;
}
