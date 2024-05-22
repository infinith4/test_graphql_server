import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { paymentsWhereInput } from '../payments/payments-where.input';
import { Type } from 'class-transformer';

@InputType()
export class PaymentsListRelationFilter {

    @Field(() => paymentsWhereInput, {nullable:true})
    @Type(() => paymentsWhereInput)
    every?: paymentsWhereInput;

    @Field(() => paymentsWhereInput, {nullable:true})
    @Type(() => paymentsWhereInput)
    some?: paymentsWhereInput;

    @Field(() => paymentsWhereInput, {nullable:true})
    @Type(() => paymentsWhereInput)
    none?: paymentsWhereInput;
}
