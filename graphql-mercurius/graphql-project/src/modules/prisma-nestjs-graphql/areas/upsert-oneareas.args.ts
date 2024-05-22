import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { areasWhereUniqueInput } from './areas-where-unique.input';
import { Type } from 'class-transformer';
import { areasCreateInput } from './areas-create.input';
import { areasUpdateInput } from './areas-update.input';

@ArgsType()
export class UpsertOneareasArgs {

    @Field(() => areasWhereUniqueInput, {nullable:false})
    @Type(() => areasWhereUniqueInput)
    where!: Prisma.AtLeast<areasWhereUniqueInput, 'id'>;

    @Field(() => areasCreateInput, {nullable:false})
    @Type(() => areasCreateInput)
    create!: areasCreateInput;

    @Field(() => areasUpdateInput, {nullable:false})
    @Type(() => areasUpdateInput)
    update!: areasUpdateInput;
}
