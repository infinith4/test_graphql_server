import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { paymentsWhereUniqueInput } from './payments-where-unique.input';
import { Type } from 'class-transformer';
import { paymentsUpdateWithoutOrdersInput } from './payments-update-without-orders.input';

@InputType()
export class paymentsUpdateWithWhereUniqueWithoutOrdersInput {

    @Field(() => paymentsWhereUniqueInput, {nullable:false})
    @Type(() => paymentsWhereUniqueInput)
    where!: Prisma.AtLeast<paymentsWhereUniqueInput, 'id'>;

    @Field(() => paymentsUpdateWithoutOrdersInput, {nullable:false})
    @Type(() => paymentsUpdateWithoutOrdersInput)
    data!: paymentsUpdateWithoutOrdersInput;
}
