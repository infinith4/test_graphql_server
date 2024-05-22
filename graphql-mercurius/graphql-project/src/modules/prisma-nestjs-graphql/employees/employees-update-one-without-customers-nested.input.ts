import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { employeesCreateWithoutCustomersInput } from './employees-create-without-customers.input';
import { Type } from 'class-transformer';
import { employeesCreateOrConnectWithoutCustomersInput } from './employees-create-or-connect-without-customers.input';
import { employeesUpsertWithoutCustomersInput } from './employees-upsert-without-customers.input';
import { employeesWhereInput } from './employees-where.input';
import { Prisma } from '@prisma/client';
import { employeesWhereUniqueInput } from './employees-where-unique.input';
import { employeesUpdateToOneWithWhereWithoutCustomersInput } from './employees-update-to-one-with-where-without-customers.input';

@InputType()
export class employeesUpdateOneWithoutCustomersNestedInput {

    @Field(() => employeesCreateWithoutCustomersInput, {nullable:true})
    @Type(() => employeesCreateWithoutCustomersInput)
    create?: employeesCreateWithoutCustomersInput;

    @Field(() => employeesCreateOrConnectWithoutCustomersInput, {nullable:true})
    @Type(() => employeesCreateOrConnectWithoutCustomersInput)
    connectOrCreate?: employeesCreateOrConnectWithoutCustomersInput;

    @Field(() => employeesUpsertWithoutCustomersInput, {nullable:true})
    @Type(() => employeesUpsertWithoutCustomersInput)
    upsert?: employeesUpsertWithoutCustomersInput;

    @Field(() => employeesWhereInput, {nullable:true})
    @Type(() => employeesWhereInput)
    disconnect?: employeesWhereInput;

    @Field(() => employeesWhereInput, {nullable:true})
    @Type(() => employeesWhereInput)
    delete?: employeesWhereInput;

    @Field(() => employeesWhereUniqueInput, {nullable:true})
    @Type(() => employeesWhereUniqueInput)
    connect?: Prisma.AtLeast<employeesWhereUniqueInput, 'id'>;

    @Field(() => employeesUpdateToOneWithWhereWithoutCustomersInput, {nullable:true})
    @Type(() => employeesUpdateToOneWithWhereWithoutCustomersInput)
    update?: employeesUpdateToOneWithWhereWithoutCustomersInput;
}
