import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { areasWhereInput } from './areas-where.input';
import { Type } from 'class-transformer';
import { areasUpdateWithoutManage_areasInput } from './areas-update-without-manage-areas.input';

@InputType()
export class areasUpdateToOneWithWhereWithoutManage_areasInput {

    @Field(() => areasWhereInput, {nullable:true})
    @Type(() => areasWhereInput)
    where?: areasWhereInput;

    @Field(() => areasUpdateWithoutManage_areasInput, {nullable:false})
    @Type(() => areasUpdateWithoutManage_areasInput)
    data!: areasUpdateWithoutManage_areasInput;
}
