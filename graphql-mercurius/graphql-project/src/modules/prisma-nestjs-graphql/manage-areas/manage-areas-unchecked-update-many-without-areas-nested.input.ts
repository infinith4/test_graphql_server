import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manage_areasCreateWithoutAreasInput } from './manage-areas-create-without-areas.input';
import { Type } from 'class-transformer';
import { manage_areasCreateOrConnectWithoutAreasInput } from './manage-areas-create-or-connect-without-areas.input';
import { manage_areasUpsertWithWhereUniqueWithoutAreasInput } from './manage-areas-upsert-with-where-unique-without-areas.input';
import { manage_areasCreateManyAreasInputEnvelope } from './manage-areas-create-many-areas-input-envelope.input';
import { Prisma } from '@prisma/client';
import { manage_areasWhereUniqueInput } from './manage-areas-where-unique.input';
import { manage_areasUpdateWithWhereUniqueWithoutAreasInput } from './manage-areas-update-with-where-unique-without-areas.input';
import { manage_areasUpdateManyWithWhereWithoutAreasInput } from './manage-areas-update-many-with-where-without-areas.input';
import { manage_areasScalarWhereInput } from './manage-areas-scalar-where.input';

@InputType()
export class manage_areasUncheckedUpdateManyWithoutAreasNestedInput {

    @Field(() => [manage_areasCreateWithoutAreasInput], {nullable:true})
    @Type(() => manage_areasCreateWithoutAreasInput)
    create?: Array<manage_areasCreateWithoutAreasInput>;

    @Field(() => [manage_areasCreateOrConnectWithoutAreasInput], {nullable:true})
    @Type(() => manage_areasCreateOrConnectWithoutAreasInput)
    connectOrCreate?: Array<manage_areasCreateOrConnectWithoutAreasInput>;

    @Field(() => [manage_areasUpsertWithWhereUniqueWithoutAreasInput], {nullable:true})
    @Type(() => manage_areasUpsertWithWhereUniqueWithoutAreasInput)
    upsert?: Array<manage_areasUpsertWithWhereUniqueWithoutAreasInput>;

    @Field(() => manage_areasCreateManyAreasInputEnvelope, {nullable:true})
    @Type(() => manage_areasCreateManyAreasInputEnvelope)
    createMany?: manage_areasCreateManyAreasInputEnvelope;

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

    @Field(() => [manage_areasUpdateWithWhereUniqueWithoutAreasInput], {nullable:true})
    @Type(() => manage_areasUpdateWithWhereUniqueWithoutAreasInput)
    update?: Array<manage_areasUpdateWithWhereUniqueWithoutAreasInput>;

    @Field(() => [manage_areasUpdateManyWithWhereWithoutAreasInput], {nullable:true})
    @Type(() => manage_areasUpdateManyWithWhereWithoutAreasInput)
    updateMany?: Array<manage_areasUpdateManyWithWhereWithoutAreasInput>;

    @Field(() => [manage_areasScalarWhereInput], {nullable:true})
    @Type(() => manage_areasScalarWhereInput)
    deleteMany?: Array<manage_areasScalarWhereInput>;
}
