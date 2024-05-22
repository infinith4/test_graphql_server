import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { paymentsWhereUniqueInput } from './payments-where-unique.input';
import { Type } from 'class-transformer';
import { paymentsCreateWithoutOrdersInput } from './payments-create-without-orders.input';

@InputType()
export class paymentsCreateOrConnectWithoutOrdersInput {

    @Field(() => paymentsWhereUniqueInput, {nullable:false})
    @Type(() => paymentsWhereUniqueInput)
    where!: Prisma.AtLeast<paymentsWhereUniqueInput, 'id'>;

    @Field(() => paymentsCreateWithoutOrdersInput, {nullable:false})
    @Type(() => paymentsCreateWithoutOrdersInput)
    create!: paymentsCreateWithoutOrdersInput;
}
