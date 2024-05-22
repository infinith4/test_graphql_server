import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { areasUpdateInput } from './areas-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { areasWhereUniqueInput } from './areas-where-unique.input';

@ArgsType()
export class UpdateOneareasArgs {

    @Field(() => areasUpdateInput, {nullable:false})
    @Type(() => areasUpdateInput)
    data!: areasUpdateInput;

    @Field(() => areasWhereUniqueInput, {nullable:false})
    @Type(() => areasWhereUniqueInput)
    where!: Prisma.AtLeast<areasWhereUniqueInput, 'id'>;
}
