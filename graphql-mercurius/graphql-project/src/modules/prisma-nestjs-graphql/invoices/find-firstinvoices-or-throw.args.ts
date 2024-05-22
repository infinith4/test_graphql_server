import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { invoicesWhereInput } from './invoices-where.input';
import { Type } from 'class-transformer';
import { invoicesOrderByWithRelationInput } from './invoices-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { invoicesWhereUniqueInput } from './invoices-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InvoicesScalarFieldEnum } from '../prisma/invoices-scalar-field.enum';

@ArgsType()
export class FindFirstinvoicesOrThrowArgs {

    @Field(() => invoicesWhereInput, {nullable:true})
    @Type(() => invoicesWhereInput)
    where?: invoicesWhereInput;

    @Field(() => [invoicesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<invoicesOrderByWithRelationInput>;

    @Field(() => invoicesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<invoicesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [InvoicesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof InvoicesScalarFieldEnum>;
}
