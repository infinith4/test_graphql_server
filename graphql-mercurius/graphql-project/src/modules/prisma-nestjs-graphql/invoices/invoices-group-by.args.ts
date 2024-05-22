import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { invoicesWhereInput } from './invoices-where.input';
import { Type } from 'class-transformer';
import { invoicesOrderByWithAggregationInput } from './invoices-order-by-with-aggregation.input';
import { InvoicesScalarFieldEnum } from '../prisma/invoices-scalar-field.enum';
import { invoicesScalarWhereWithAggregatesInput } from './invoices-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class invoicesGroupByArgs {

    @Field(() => invoicesWhereInput, {nullable:true})
    @Type(() => invoicesWhereInput)
    where?: invoicesWhereInput;

    @Field(() => [invoicesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<invoicesOrderByWithAggregationInput>;

    @Field(() => [InvoicesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof InvoicesScalarFieldEnum>;

    @Field(() => invoicesScalarWhereWithAggregatesInput, {nullable:true})
    having?: invoicesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
