import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoicesCreateWithoutCustomersInput } from './invoices-create-without-customers.input';
import { Type } from 'class-transformer';
import { invoicesCreateOrConnectWithoutCustomersInput } from './invoices-create-or-connect-without-customers.input';
import { invoicesCreateManyCustomersInputEnvelope } from './invoices-create-many-customers-input-envelope.input';
import { Prisma } from '@prisma/client';
import { invoicesWhereUniqueInput } from './invoices-where-unique.input';

@InputType()
export class invoicesUncheckedCreateNestedManyWithoutCustomersInput {

    @Field(() => [invoicesCreateWithoutCustomersInput], {nullable:true})
    @Type(() => invoicesCreateWithoutCustomersInput)
    create?: Array<invoicesCreateWithoutCustomersInput>;

    @Field(() => [invoicesCreateOrConnectWithoutCustomersInput], {nullable:true})
    @Type(() => invoicesCreateOrConnectWithoutCustomersInput)
    connectOrCreate?: Array<invoicesCreateOrConnectWithoutCustomersInput>;

    @Field(() => invoicesCreateManyCustomersInputEnvelope, {nullable:true})
    @Type(() => invoicesCreateManyCustomersInputEnvelope)
    createMany?: invoicesCreateManyCustomersInputEnvelope;

    @Field(() => [invoicesWhereUniqueInput], {nullable:true})
    @Type(() => invoicesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<invoicesWhereUniqueInput, 'id'>>;
}
