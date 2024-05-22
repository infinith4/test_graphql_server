import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { payment_transactionsWhereInput } from '../payment-transactions/payment-transactions-where.input';
import { Type } from 'class-transformer';
import { payment_transactionsOrderByWithRelationInput } from '../payment-transactions/payment-transactions-order-by-with-relation.input';
import { payment_transactionsWhereUniqueInput } from '../payment-transactions/payment-transactions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Payment_transactionsScalarFieldEnum } from './payment-transactions-scalar-field.enum';

@ArgsType()
export class FindManypaymentTransactionsArgs {

    @Field(() => payment_transactionsWhereInput, {nullable:true})
    @Type(() => payment_transactionsWhereInput)
    where?: payment_transactionsWhereInput;

    @Field(() => [payment_transactionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<payment_transactionsOrderByWithRelationInput>;

    @Field(() => payment_transactionsWhereUniqueInput, {nullable:true})
    cursor?: payment_transactionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Payment_transactionsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Payment_transactionsScalarFieldEnum>;
}
