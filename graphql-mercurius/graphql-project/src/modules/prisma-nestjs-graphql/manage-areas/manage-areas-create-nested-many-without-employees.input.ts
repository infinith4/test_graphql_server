import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manage_areasCreateWithoutEmployeesInput } from './manage-areas-create-without-employees.input';
import { Type } from 'class-transformer';
import { manage_areasCreateOrConnectWithoutEmployeesInput } from './manage-areas-create-or-connect-without-employees.input';
import { manage_areasCreateManyEmployeesInputEnvelope } from './manage-areas-create-many-employees-input-envelope.input';
import { Prisma } from '@prisma/client';
import { manage_areasWhereUniqueInput } from './manage-areas-where-unique.input';

@InputType()
export class manage_areasCreateNestedManyWithoutEmployeesInput {

    @Field(() => [manage_areasCreateWithoutEmployeesInput], {nullable:true})
    @Type(() => manage_areasCreateWithoutEmployeesInput)
    create?: Array<manage_areasCreateWithoutEmployeesInput>;

    @Field(() => [manage_areasCreateOrConnectWithoutEmployeesInput], {nullable:true})
    @Type(() => manage_areasCreateOrConnectWithoutEmployeesInput)
    connectOrCreate?: Array<manage_areasCreateOrConnectWithoutEmployeesInput>;

    @Field(() => manage_areasCreateManyEmployeesInputEnvelope, {nullable:true})
    @Type(() => manage_areasCreateManyEmployeesInputEnvelope)
    createMany?: manage_areasCreateManyEmployeesInputEnvelope;

    @Field(() => [manage_areasWhereUniqueInput], {nullable:true})
    @Type(() => manage_areasWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<manage_areasWhereUniqueInput, 'area_id_employee_id'>>;
}
