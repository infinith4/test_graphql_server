import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ordersCreateNestedOneWithoutPaymentsInput } from '../orders/orders-create-nested-one-without-payments.input';

@InputType()
export class paymentsCreateInput {

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    amount!: Decimal;

    @Field(() => String, {nullable:false})
    payment_method!: string;

    @Field(() => String, {nullable:false})
    payment_status!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ordersCreateNestedOneWithoutPaymentsInput, {nullable:true})
    @Type(() => ordersCreateNestedOneWithoutPaymentsInput)
    orders?: ordersCreateNestedOneWithoutPaymentsInput;
}
