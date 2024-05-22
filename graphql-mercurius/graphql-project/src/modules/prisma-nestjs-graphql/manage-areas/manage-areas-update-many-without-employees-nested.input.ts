import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manage_areasCreateWithoutEmployeesInput } from './manage-areas-create-without-employees.input';
import { Type } from 'class-transformer';
import { manage_areasCreateOrConnectWithoutEmployeesInput } from './manage-areas-create-or-connect-without-employees.input';
import { manage_areasUpsertWithWhereUniqueWithoutEmployeesInput } from './manage-areas-upsert-with-where-unique-without-employees.input';
import { manage_areasCreateManyEmployeesInputEnvelope } from './manage-areas-create-many-employees-input-envelope.input';
import { Prisma } from '@prisma/client';
import { manage_areasWhereUniqueInput } from './manage-areas-where-unique.input';
import { manage_areasUpdateWithWhereUniqueWithoutEmployeesInput } from './manage-areas-update-with-where-unique-without-employees.input';
import { manage_areasUpdateManyWithWhereWithoutEmployeesInput } from './manage-areas-update-many-with-where-without-employees.input';
import { manage_areasScalarWhereInput } from './manage-areas-scalar-where.input';

@InputType()
export class manage_areasUpdateManyWithoutEmployeesNestedInput {

    @Field(() => [manage_areasCreateWithoutEmployeesInput], {nullable:true})
    @Type(() => manage_areasCreateWithoutEmployeesInput)
    create?: Array<manage_areasCreateWithoutEmployeesInput>;

    @Field(() => [manage_areasCreateOrConnectWithoutEmployeesInput], {nullable:true})
    @Type(() => manage_areasCreateOrConnectWithoutEmployeesInput)
    connectOrCreate?: Array<manage_areasCreateOrConnectWithoutEmployeesInput>;

    @Field(() => [manage_areasUpsertWithWhereUniqueWithoutEmployeesInput], {nullable:true})
    @Type(() => manage_areasUpsertWithWhereUniqueWithoutEmployeesInput)
    upsert?: Array<manage_areasUpsertWithWhereUniqueWithoutEmployeesInput>;

    @Field(() => manage_areasCreateManyEmployeesInputEnvelope, {nullable:true})
    @Type(() => manage_areasCreateManyEmployeesInputEnvelope)
    createMany?: manage_areasCreateManyEmployeesInputEnvelope;

    @Field(() => [manage_areasWhereUniqueInput], {nullable:true})
    @Type(() => manage_areasWhereUniqueInput)
    set?: Array<Prisma.AtLeast<manage_areasWhereUniqueInput, 'area_id_employee_id'>>;

    @Field(() => [manage_areasWhereUniqueInput], {nullable:true})
    @Type(() => manage_areasWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<manage_areasWhereUniqueInput, 'area_id_employee_id'>>;

    @Field(() => [manage_areasWhereUniqueInput], {nullable:true})
    @Type(() => manage_areasWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<manage_areasWhereUniqueInput, 'area_id_employee_id'>>;

    @Field(() => [manage_areasWhereUniqueInput], {nullable:true})
    @Type(() => manage_areasWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<manage_areasWhereUniqueInput, 'area_id_employee_id'>>;

    @Field(() => [manage_areasUpdateWithWhereUniqueWithoutEmployeesInput], {nullable:true})
    @Type(() => manage_areasUpdateWithWhereUniqueWithoutEmployeesInput)
    update?: Array<manage_areasUpdateWithWhereUniqueWithoutEmployeesInput>;

    @Field(() => [manage_areasUpdateManyWithWhereWithoutEmployeesInput], {nullable:true})
    @Type(() => manage_areasUpdateManyWithWhereWithoutEmployeesInput)
    updateMany?: Array<manage_areasUpdateManyWithWhereWithoutEmployeesInput>;

    @Field(() => [manage_areasScalarWhereInput], {nullable:true})
    @Type(() => manage_areasScalarWhereInput)
    deleteMany?: Array<manage_areasScalarWhereInput>;
}
