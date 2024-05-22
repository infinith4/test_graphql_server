import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { employeesCreateWithoutCustomersInput } from './employees-create-without-customers.input';
import { Type } from 'class-transformer';
import { employeesCreateOrConnectWithoutCustomersInput } from './employees-create-or-connect-without-customers.input';
import { Prisma } from '@prisma/client';
import { employeesWhereUniqueInput } from './employees-where-unique.input';

@InputType()
export class employeesCreateNestedOneWithoutCustomersInput {

    @Field(() => employeesCreateWithoutCustomersInput, {nullable:true})
    @Type(() => employeesCreateWithoutCustomersInput)
    create?: employeesCreateWithoutCustomersInput;

    @Field(() => employeesCreateOrConnectWithoutCustomersInput, {nullable:true})
    @Type(() => employeesCreateOrConnectWithoutCustomersInput)
    connectOrCreate?: employeesCreateOrConnectWithoutCustomersInput;

    @Field(() => employeesWhereUniqueInput, {nullable:true})
    @Type(() => employeesWhereUniqueInput)
    connect?: Prisma.AtLeast<employeesWhereUniqueInput, 'id'>;
}
