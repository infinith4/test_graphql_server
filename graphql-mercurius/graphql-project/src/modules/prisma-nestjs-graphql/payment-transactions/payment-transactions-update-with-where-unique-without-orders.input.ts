import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { payment_transactionsWhereUniqueInput } from './payment-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { payment_transactionsUpdateWithoutOrdersInput } from './payment-transactions-update-without-orders.input';

@InputType()
export class payment_transactionsUpdateWithWhereUniqueWithoutOrdersInput {

    @Field(() => payment_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => payment_transactionsWhereUniqueInput)
    where!: Prisma.AtLeast<payment_transactionsWhereUniqueInput, 'id'>;

    @Field(() => payment_transactionsUpdateWithoutOrdersInput, {nullable:false})
    @Type(() => payment_transactionsUpdateWithoutOrdersInput)
    data!: payment_transactionsUpdateWithoutOrdersInput;
}
