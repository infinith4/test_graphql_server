import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { invoicesWhereUniqueInput } from './invoices-where-unique.input';
import { Type } from 'class-transformer';
import { invoicesCreateInput } from './invoices-create.input';
import { invoicesUpdateInput } from './invoices-update.input';

@ArgsType()
export class UpsertOneinvoicesArgs {

    @Field(() => invoicesWhereUniqueInput, {nullable:false})
    @Type(() => invoicesWhereUniqueInput)
    where!: Prisma.AtLeast<invoicesWhereUniqueInput, 'id'>;

    @Field(() => invoicesCreateInput, {nullable:false})
    @Type(() => invoicesCreateInput)
    create!: invoicesCreateInput;

    @Field(() => invoicesUpdateInput, {nullable:false})
    @Type(() => invoicesUpdateInput)
    update!: invoicesUpdateInput;
}
