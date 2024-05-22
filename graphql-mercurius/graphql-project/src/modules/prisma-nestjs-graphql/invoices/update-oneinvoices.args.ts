import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { invoicesUpdateInput } from './invoices-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { invoicesWhereUniqueInput } from './invoices-where-unique.input';

@ArgsType()
export class UpdateOneinvoicesArgs {

    @Field(() => invoicesUpdateInput, {nullable:false})
    @Type(() => invoicesUpdateInput)
    data!: invoicesUpdateInput;

    @Field(() => invoicesWhereUniqueInput, {nullable:false})
    @Type(() => invoicesWhereUniqueInput)
    where!: Prisma.AtLeast<invoicesWhereUniqueInput, 'id'>;
}
