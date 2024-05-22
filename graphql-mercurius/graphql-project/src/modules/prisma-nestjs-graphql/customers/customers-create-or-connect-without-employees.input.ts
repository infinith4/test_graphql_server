import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { customersWhereUniqueInput } from './customers-where-unique.input';
import { Type } from 'class-transformer';
import { customersCreateWithoutEmployeesInput } from './customers-create-without-employees.input';

@InputType()
export class customersCreateOrConnectWithoutEmployeesInput {

    @Field(() => customersWhereUniqueInput, {nullable:false})
    @Type(() => customersWhereUniqueInput)
    where!: Prisma.AtLeast<customersWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => customersCreateWithoutEmployeesInput, {nullable:false})
    @Type(() => customersCreateWithoutEmployeesInput)
    create!: customersCreateWithoutEmployeesInput;
}
