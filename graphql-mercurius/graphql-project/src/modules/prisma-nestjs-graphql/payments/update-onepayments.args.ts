import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { paymentsUpdateInput } from './payments-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { paymentsWhereUniqueInput } from './payments-where-unique.input';

@ArgsType()
export class UpdateOnepaymentsArgs {

    @Field(() => paymentsUpdateInput, {nullable:false})
    @Type(() => paymentsUpdateInput)
    data!: paymentsUpdateInput;

    @Field(() => paymentsWhereUniqueInput, {nullable:false})
    @Type(() => paymentsWhereUniqueInput)
    where!: Prisma.AtLeast<paymentsWhereUniqueInput, 'id'>;
}
