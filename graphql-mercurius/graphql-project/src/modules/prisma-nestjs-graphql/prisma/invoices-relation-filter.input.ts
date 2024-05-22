import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoicesWhereInput } from '../invoices/invoices-where.input';

@InputType()
export class InvoicesRelationFilter {

    @Field(() => invoicesWhereInput, {nullable:true})
    is?: invoicesWhereInput;

    @Field(() => invoicesWhereInput, {nullable:true})
    isNot?: invoicesWhereInput;
}
