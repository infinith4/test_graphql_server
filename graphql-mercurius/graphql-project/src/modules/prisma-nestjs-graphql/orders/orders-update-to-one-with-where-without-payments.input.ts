import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereInput } from './orders-where.input';
import { Type } from 'class-transformer';
import { ordersUpdateWithoutPaymentsInput } from './orders-update-without-payments.input';

@InputType()
export class ordersUpdateToOneWithWhereWithoutPaymentsInput {

    @Field(() => ordersWhereInput, {nullable:true})
    @Type(() => ordersWhereInput)
    where?: ordersWhereInput;

    @Field(() => ordersUpdateWithoutPaymentsInput, {nullable:false})
    @Type(() => ordersUpdateWithoutPaymentsInput)
    data!: ordersUpdateWithoutPaymentsInput;
}
