import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { paymentsWhereInput } from './payments-where.input';
import { Type } from 'class-transformer';
import { paymentsOrderByWithAggregationInput } from './payments-order-by-with-aggregation.input';
import { PaymentsScalarFieldEnum } from '../prisma/payments-scalar-field.enum';
import { paymentsScalarWhereWithAggregatesInput } from './payments-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class paymentsGroupByArgs {

    @Field(() => paymentsWhereInput, {nullable:true})
    @Type(() => paymentsWhereInput)
    where?: paymentsWhereInput;

    @Field(() => [paymentsOrderByWithAggregationInput], {nullable:true})
    @Type(() => paymentsOrderByWithAggregationInput)
    orderBy?: Array<paymentsOrderByWithAggregationInput>;

    @Field(() => [PaymentsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PaymentsScalarFieldEnum>;

    @Field(() => paymentsScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => paymentsScalarWhereWithAggregatesInput)
    having?: paymentsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
