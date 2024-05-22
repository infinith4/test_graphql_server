import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manage_areasCreateWithoutAreasInput } from './manage-areas-create-without-areas.input';
import { Type } from 'class-transformer';
import { manage_areasCreateOrConnectWithoutAreasInput } from './manage-areas-create-or-connect-without-areas.input';
import { manage_areasCreateManyAreasInputEnvelope } from './manage-areas-create-many-areas-input-envelope.input';
import { Prisma } from '@prisma/client';
import { manage_areasWhereUniqueInput } from './manage-areas-where-unique.input';

@InputType()
export class manage_areasUncheckedCreateNestedManyWithoutAreasInput {

    @Field(() => [manage_areasCreateWithoutAreasInput], {nullable:true})
    @Type(() => manage_areasCreateWithoutAreasInput)
    create?: Array<manage_areasCreateWithoutAreasInput>;

    @Field(() => [manage_areasCreateOrConnectWithoutAreasInput], {nullable:true})
    @Type(() => manage_areasCreateOrConnectWithoutAreasInput)
    connectOrCreate?: Array<manage_areasCreateOrConnectWithoutAreasInput>;

    @Field(() => manage_areasCreateManyAreasInputEnvelope, {nullable:true})
    @Type(() => manage_areasCreateManyAreasInputEnvelope)
    createMany?: manage_areasCreateManyAreasInputEnvelope;

    @Field(() => [manage_areasWhereUniqueInput], {nullable:true})
    @Type(() => manage_areasWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<manage_areasWhereUniqueInput, 'area_id_employee_id'>>;
}
