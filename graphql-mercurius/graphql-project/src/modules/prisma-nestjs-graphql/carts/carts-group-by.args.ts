import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cartsWhereInput } from './carts-where.input';
import { Type } from 'class-transformer';
import { cartsOrderByWithAggregationInput } from './carts-order-by-with-aggregation.input';
import { CartsScalarFieldEnum } from '../prisma/carts-scalar-field.enum';
import { cartsScalarWhereWithAggregatesInput } from './carts-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class cartsGroupByArgs {

    @Field(() => cartsWhereInput, {nullable:true})
    @Type(() => cartsWhereInput)
    where?: cartsWhereInput;

    @Field(() => [cartsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<cartsOrderByWithAggregationInput>;

    @Field(() => [CartsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CartsScalarFieldEnum>;

    @Field(() => cartsScalarWhereWithAggregatesInput, {nullable:true})
    having?: cartsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
