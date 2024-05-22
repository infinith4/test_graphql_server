import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { customersWhereUniqueInput } from './customers-where-unique.input';
import { Type } from 'class-transformer';
import { customersUpdateWithoutEmployeesInput } from './customers-update-without-employees.input';
import { customersCreateWithoutEmployeesInput } from './customers-create-without-employees.input';

@InputType()
export class customersUpsertWithWhereUniqueWithoutEmployeesInput {

    @Field(() => customersWhereUniqueInput, {nullable:false})
    @Type(() => customersWhereUniqueInput)
    where!: Prisma.AtLeast<customersWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => customersUpdateWithoutEmployeesInput, {nullable:false})
    @Type(() => customersUpdateWithoutEmployeesInput)
    update!: customersUpdateWithoutEmployeesInput;

    @Field(() => customersCreateWithoutEmployeesInput, {nullable:false})
    @Type(() => customersCreateWithoutEmployeesInput)
    create!: customersCreateWithoutEmployeesInput;
}
