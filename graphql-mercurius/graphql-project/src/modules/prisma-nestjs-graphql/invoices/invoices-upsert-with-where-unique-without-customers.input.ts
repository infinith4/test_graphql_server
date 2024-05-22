import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { invoicesWhereUniqueInput } from './invoices-where-unique.input';
import { Type } from 'class-transformer';
import { invoicesUpdateWithoutCustomersInput } from './invoices-update-without-customers.input';
import { invoicesCreateWithoutCustomersInput } from './invoices-create-without-customers.input';

@InputType()
export class invoicesUpsertWithWhereUniqueWithoutCustomersInput {

    @Field(() => invoicesWhereUniqueInput, {nullable:false})
    @Type(() => invoicesWhereUniqueInput)
    where!: Prisma.AtLeast<invoicesWhereUniqueInput, 'id'>;

    @Field(() => invoicesUpdateWithoutCustomersInput, {nullable:false})
    @Type(() => invoicesUpdateWithoutCustomersInput)
    update!: invoicesUpdateWithoutCustomersInput;

    @Field(() => invoicesCreateWithoutCustomersInput, {nullable:false})
    @Type(() => invoicesCreateWithoutCustomersInput)
    create!: invoicesCreateWithoutCustomersInput;
}
