import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { paymentsWhereUniqueInput } from './payments-where-unique.input';
import { Type } from 'class-transformer';
import { paymentsUpdateWithoutOrdersInput } from './payments-update-without-orders.input';
import { paymentsCreateWithoutOrdersInput } from './payments-create-without-orders.input';

@InputType()
export class paymentsUpsertWithWhereUniqueWithoutOrdersInput {

    @Field(() => paymentsWhereUniqueInput, {nullable:false})
    @Type(() => paymentsWhereUniqueInput)
    where!: Prisma.AtLeast<paymentsWhereUniqueInput, 'id'>;

    @Field(() => paymentsUpdateWithoutOrdersInput, {nullable:false})
    @Type(() => paymentsUpdateWithoutOrdersInput)
    update!: paymentsUpdateWithoutOrdersInput;

    @Field(() => paymentsCreateWithoutOrdersInput, {nullable:false})
    @Type(() => paymentsCreateWithoutOrdersInput)
    create!: paymentsCreateWithoutOrdersInput;
}
