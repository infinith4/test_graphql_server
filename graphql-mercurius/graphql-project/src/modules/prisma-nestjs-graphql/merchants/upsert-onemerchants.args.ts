import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { merchantsWhereUniqueInput } from './merchants-where-unique.input';
import { Type } from 'class-transformer';
import { merchantsCreateInput } from './merchants-create.input';
import { merchantsUpdateInput } from './merchants-update.input';

@ArgsType()
export class UpsertOnemerchantsArgs {

    @Field(() => merchantsWhereUniqueInput, {nullable:false})
    @Type(() => merchantsWhereUniqueInput)
    where!: Prisma.AtLeast<merchantsWhereUniqueInput, 'id'>;

    @Field(() => merchantsCreateInput, {nullable:false})
    @Type(() => merchantsCreateInput)
    create!: merchantsCreateInput;

    @Field(() => merchantsUpdateInput, {nullable:false})
    @Type(() => merchantsUpdateInput)
    update!: merchantsUpdateInput;
}
