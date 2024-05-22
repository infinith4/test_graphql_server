import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { manage_areasWhereUniqueInput } from './manage-areas-where-unique.input';
import { Type } from 'class-transformer';
import { manage_areasUpdateWithoutAreasInput } from './manage-areas-update-without-areas.input';
import { manage_areasCreateWithoutAreasInput } from './manage-areas-create-without-areas.input';

@InputType()
export class manage_areasUpsertWithWhereUniqueWithoutAreasInput {

    @Field(() => manage_areasWhereUniqueInput, {nullable:false})
    @Type(() => manage_areasWhereUniqueInput)
    where!: Prisma.AtLeast<manage_areasWhereUniqueInput, 'area_id_employee_id'>;

    @Field(() => manage_areasUpdateWithoutAreasInput, {nullable:false})
    @Type(() => manage_areasUpdateWithoutAreasInput)
    update!: manage_areasUpdateWithoutAreasInput;

    @Field(() => manage_areasCreateWithoutAreasInput, {nullable:false})
    @Type(() => manage_areasCreateWithoutAreasInput)
    create!: manage_areasCreateWithoutAreasInput;
}
