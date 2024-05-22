import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { employeesWhereUniqueInput } from './employees-where-unique.input';
import { Type } from 'class-transformer';
import { employeesCreateWithoutCustomersInput } from './employees-create-without-customers.input';

@InputType()
export class employeesCreateOrConnectWithoutCustomersInput {

    @Field(() => employeesWhereUniqueInput, {nullable:false})
    @Type(() => employeesWhereUniqueInput)
    where!: Prisma.AtLeast<employeesWhereUniqueInput, 'id'>;

    @Field(() => employeesCreateWithoutCustomersInput, {nullable:false})
    @Type(() => employeesCreateWithoutCustomersInput)
    create!: employeesCreateWithoutCustomersInput;
}
