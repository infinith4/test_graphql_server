import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { invoicesWhereUniqueInput } from './invoices-where-unique.input';
import { Type } from 'class-transformer';
import { invoicesUpdateWithoutCustomersInput } from './invoices-update-without-customers.input';

@InputType()
export class invoicesUpdateWithWhereUniqueWithoutCustomersInput {

    @Field(() => invoicesWhereUniqueInput, {nullable:false})
    @Type(() => invoicesWhereUniqueInput)
    where!: Prisma.AtLeast<invoicesWhereUniqueInput, 'id'>;

    @Field(() => invoicesUpdateWithoutCustomersInput, {nullable:false})
    @Type(() => invoicesUpdateWithoutCustomersInput)
    data!: invoicesUpdateWithoutCustomersInput;
}
