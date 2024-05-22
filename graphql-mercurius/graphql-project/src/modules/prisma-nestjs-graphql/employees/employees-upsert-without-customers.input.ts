import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { employeesUpdateWithoutCustomersInput } from './employees-update-without-customers.input';
import { Type } from 'class-transformer';
import { employeesCreateWithoutCustomersInput } from './employees-create-without-customers.input';
import { employeesWhereInput } from './employees-where.input';

@InputType()
export class employeesUpsertWithoutCustomersInput {

    @Field(() => employeesUpdateWithoutCustomersInput, {nullable:false})
    @Type(() => employeesUpdateWithoutCustomersInput)
    update!: employeesUpdateWithoutCustomersInput;

    @Field(() => employeesCreateWithoutCustomersInput, {nullable:false})
    @Type(() => employeesCreateWithoutCustomersInput)
    create!: employeesCreateWithoutCustomersInput;

    @Field(() => employeesWhereInput, {nullable:true})
    @Type(() => employeesWhereInput)
    where?: employeesWhereInput;
}
