import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoicesWhereInput } from '../invoices/invoices-where.input';

@InputType()
export class InvoicesListRelationFilter {

    @Field(() => invoicesWhereInput, {nullable:true})
    every?: invoicesWhereInput;

    @Field(() => invoicesWhereInput, {nullable:true})
    some?: invoicesWhereInput;

    @Field(() => invoicesWhereInput, {nullable:true})
    none?: invoicesWhereInput;
}
