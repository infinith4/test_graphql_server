import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { paymentsWhereUniqueInput } from './payments-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquepaymentsOrThrowArgs {

    @Field(() => paymentsWhereUniqueInput, {nullable:false})
    @Type(() => paymentsWhereUniqueInput)
    where!: Prisma.AtLeast<paymentsWhereUniqueInput, 'id'>;
}
