import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoicesCreateWithoutCustomersInput } from './invoices-create-without-customers.input';
import { Type } from 'class-transformer';
import { invoicesCreateOrConnectWithoutCustomersInput } from './invoices-create-or-connect-without-customers.input';
import { invoicesUpsertWithWhereUniqueWithoutCustomersInput } from './invoices-upsert-with-where-unique-without-customers.input';
import { invoicesCreateManyCustomersInputEnvelope } from './invoices-create-many-customers-input-envelope.input';
import { Prisma } from '@prisma/client';
import { invoicesWhereUniqueInput } from './invoices-where-unique.input';
import { invoicesUpdateWithWhereUniqueWithoutCustomersInput } from './invoices-update-with-where-unique-without-customers.input';
import { invoicesUpdateManyWithWhereWithoutCustomersInput } from './invoices-update-many-with-where-without-customers.input';
import { invoicesScalarWhereInput } from './invoices-scalar-where.input';

@InputType()
export class invoicesUncheckedUpdateManyWithoutCustomersNestedInput {

    @Field(() => [invoicesCreateWithoutCustomersInput], {nullable:true})
    @Type(() => invoicesCreateWithoutCustomersInput)
    create?: Array<invoicesCreateWithoutCustomersInput>;

    @Field(() => [invoicesCreateOrConnectWithoutCustomersInput], {nullable:true})
    @Type(() => invoicesCreateOrConnectWithoutCustomersInput)
    connectOrCreate?: Array<invoicesCreateOrConnectWithoutCustomersInput>;

    @Field(() => [invoicesUpsertWithWhereUniqueWithoutCustomersInput], {nullable:true})
    @Type(() => invoicesUpsertWithWhereUniqueWithoutCustomersInput)
    upsert?: Array<invoicesUpsertWithWhereUniqueWithoutCustomersInput>;

    @Field(() => invoicesCreateManyCustomersInputEnvelope, {nullable:true})
    @Type(() => invoicesCreateManyCustomersInputEnvelope)
    createMany?: invoicesCreateManyCustomersInputEnvelope;

    @Field(() => [invoicesWhereUniqueInput], {nullable:true})
    @Type(() => invoicesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<invoicesWhereUniqueInput, 'id'>>;

    @Field(() => [invoicesWhereUniqueInput], {nullable:true})
    @Type(() => invoicesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<invoicesWhereUniqueInput, 'id'>>;

    @Field(() => [invoicesWhereUniqueInput], {nullable:true})
    @Type(() => invoicesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<invoicesWhereUniqueInput, 'id'>>;

    @Field(() => [invoicesWhereUniqueInput], {nullable:true})
    @Type(() => invoicesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<invoicesWhereUniqueInput, 'id'>>;

    @Field(() => [invoicesUpdateWithWhereUniqueWithoutCustomersInput], {nullable:true})
    @Type(() => invoicesUpdateWithWhereUniqueWithoutCustomersInput)
    update?: Array<invoicesUpdateWithWhereUniqueWithoutCustomersInput>;

    @Field(() => [invoicesUpdateManyWithWhereWithoutCustomersInput], {nullable:true})
    @Type(() => invoicesUpdateManyWithWhereWithoutCustomersInput)
    updateMany?: Array<invoicesUpdateManyWithWhereWithoutCustomersInput>;

    @Field(() => [invoicesScalarWhereInput], {nullable:true})
    @Type(() => invoicesScalarWhereInput)
    deleteMany?: Array<invoicesScalarWhereInput>;
}
