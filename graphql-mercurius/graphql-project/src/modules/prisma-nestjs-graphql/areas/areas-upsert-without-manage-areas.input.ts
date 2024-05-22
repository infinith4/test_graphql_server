import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { areasUpdateWithoutManage_areasInput } from './areas-update-without-manage-areas.input';
import { Type } from 'class-transformer';
import { areasCreateWithoutManage_areasInput } from './areas-create-without-manage-areas.input';
import { areasWhereInput } from './areas-where.input';

@InputType()
export class areasUpsertWithoutManage_areasInput {

    @Field(() => areasUpdateWithoutManage_areasInput, {nullable:false})
    @Type(() => areasUpdateWithoutManage_areasInput)
    update!: areasUpdateWithoutManage_areasInput;

    @Field(() => areasCreateWithoutManage_areasInput, {nullable:false})
    @Type(() => areasCreateWithoutManage_areasInput)
    create!: areasCreateWithoutManage_areasInput;

    @Field(() => areasWhereInput, {nullable:true})
    @Type(() => areasWhereInput)
    where?: areasWhereInput;
}
