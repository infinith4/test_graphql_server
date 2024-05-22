import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { areasCreateWithoutManage_areasInput } from './areas-create-without-manage-areas.input';
import { Type } from 'class-transformer';
import { areasCreateOrConnectWithoutManage_areasInput } from './areas-create-or-connect-without-manage-areas.input';
import { areasUpsertWithoutManage_areasInput } from './areas-upsert-without-manage-areas.input';
import { Prisma } from '@prisma/client';
import { areasWhereUniqueInput } from './areas-where-unique.input';
import { areasUpdateToOneWithWhereWithoutManage_areasInput } from './areas-update-to-one-with-where-without-manage-areas.input';

@InputType()
export class areasUpdateOneRequiredWithoutManage_areasNestedInput {

    @Field(() => areasCreateWithoutManage_areasInput, {nullable:true})
    @Type(() => areasCreateWithoutManage_areasInput)
    create?: areasCreateWithoutManage_areasInput;

    @Field(() => areasCreateOrConnectWithoutManage_areasInput, {nullable:true})
    @Type(() => areasCreateOrConnectWithoutManage_areasInput)
    connectOrCreate?: areasCreateOrConnectWithoutManage_areasInput;

    @Field(() => areasUpsertWithoutManage_areasInput, {nullable:true})
    @Type(() => areasUpsertWithoutManage_areasInput)
    upsert?: areasUpsertWithoutManage_areasInput;

    @Field(() => areasWhereUniqueInput, {nullable:true})
    @Type(() => areasWhereUniqueInput)
    connect?: Prisma.AtLeast<areasWhereUniqueInput, 'id'>;

    @Field(() => areasUpdateToOneWithWhereWithoutManage_areasInput, {nullable:true})
    @Type(() => areasUpdateToOneWithWhereWithoutManage_areasInput)
    update?: areasUpdateToOneWithWhereWithoutManage_areasInput;
}
