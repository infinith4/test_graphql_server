import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { manage_areasWhereUniqueInput } from './manage-areas-where-unique.input';
import { Type } from 'class-transformer';
import { manage_areasUpdateWithoutEmployeesInput } from './manage-areas-update-without-employees.input';
import { manage_areasCreateWithoutEmployeesInput } from './manage-areas-create-without-employees.input';

@InputType()
export class manage_areasUpsertWithWhereUniqueWithoutEmployeesInput {

    @Field(() => manage_areasWhereUniqueInput, {nullable:false})
    @Type(() => manage_areasWhereUniqueInput)
    where!: Prisma.AtLeast<manage_areasWhereUniqueInput, 'area_id_employee_id'>;

    @Field(() => manage_areasUpdateWithoutEmployeesInput, {nullable:false})
    @Type(() => manage_areasUpdateWithoutEmployeesInput)
    update!: manage_areasUpdateWithoutEmployeesInput;

    @Field(() => manage_areasCreateWithoutEmployeesInput, {nullable:false})
    @Type(() => manage_areasCreateWithoutEmployeesInput)
    create!: manage_areasCreateWithoutEmployeesInput;
}
