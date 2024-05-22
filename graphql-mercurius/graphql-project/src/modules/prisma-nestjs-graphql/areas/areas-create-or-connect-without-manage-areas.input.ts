import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { areasWhereUniqueInput } from './areas-where-unique.input';
import { Type } from 'class-transformer';
import { areasCreateWithoutManage_areasInput } from './areas-create-without-manage-areas.input';

@InputType()
export class areasCreateOrConnectWithoutManage_areasInput {

    @Field(() => areasWhereUniqueInput, {nullable:false})
    @Type(() => areasWhereUniqueInput)
    where!: Prisma.AtLeast<areasWhereUniqueInput, 'id'>;

    @Field(() => areasCreateWithoutManage_areasInput, {nullable:false})
    @Type(() => areasCreateWithoutManage_areasInput)
    create!: areasCreateWithoutManage_areasInput;
}
