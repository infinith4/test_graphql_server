import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { paymentsWhereUniqueInput } from './payments-where-unique.input';
import { Type } from 'class-transformer';
import { paymentsCreateInput } from './payments-create.input';
import { paymentsUpdateInput } from './payments-update.input';

@ArgsType()
export class UpsertOnepaymentsArgs {

    @Field(() => paymentsWhereUniqueInput, {nullable:false})
    @Type(() => paymentsWhereUniqueInput)
    where!: Prisma.AtLeast<paymentsWhereUniqueInput, 'id'>;

    @Field(() => paymentsCreateInput, {nullable:false})
    @Type(() => paymentsCreateInput)
    create!: paymentsCreateInput;

    @Field(() => paymentsUpdateInput, {nullable:false})
    @Type(() => paymentsUpdateInput)
    update!: paymentsUpdateInput;
}
