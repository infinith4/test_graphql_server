import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { merchantsUpdateInput } from './merchants-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { merchantsWhereUniqueInput } from './merchants-where-unique.input';

@ArgsType()
export class UpdateOnemerchantsArgs {

    @Field(() => merchantsUpdateInput, {nullable:false})
    @Type(() => merchantsUpdateInput)
    data!: merchantsUpdateInput;

    @Field(() => merchantsWhereUniqueInput, {nullable:false})
    @Type(() => merchantsWhereUniqueInput)
    where!: Prisma.AtLeast<merchantsWhereUniqueInput, 'id'>;
}
