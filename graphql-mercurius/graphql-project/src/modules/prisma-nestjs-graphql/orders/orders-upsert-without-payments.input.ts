import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersUpdateWithoutPaymentsInput } from './orders-update-without-payments.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutPaymentsInput } from './orders-create-without-payments.input';
import { ordersWhereInput } from './orders-where.input';

@InputType()
export class ordersUpsertWithoutPaymentsInput {

    @Field(() => ordersUpdateWithoutPaymentsInput, {nullable:false})
    @Type(() => ordersUpdateWithoutPaymentsInput)
    update!: ordersUpdateWithoutPaymentsInput;

    @Field(() => ordersCreateWithoutPaymentsInput, {nullable:false})
    @Type(() => ordersCreateWithoutPaymentsInput)
    create!: ordersCreateWithoutPaymentsInput;

    @Field(() => ordersWhereInput, {nullable:true})
    @Type(() => ordersWhereInput)
    where?: ordersWhereInput;
}
