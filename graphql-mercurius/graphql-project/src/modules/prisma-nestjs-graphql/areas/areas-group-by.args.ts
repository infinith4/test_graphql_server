import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { areasWhereInput } from './areas-where.input';
import { Type } from 'class-transformer';
import { areasOrderByWithAggregationInput } from './areas-order-by-with-aggregation.input';
import { AreasScalarFieldEnum } from '../prisma/areas-scalar-field.enum';
import { areasScalarWhereWithAggregatesInput } from './areas-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class areasGroupByArgs {

    @Field(() => areasWhereInput, {nullable:true})
    @Type(() => areasWhereInput)
    where?: areasWhereInput;

    @Field(() => [areasOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<areasOrderByWithAggregationInput>;

    @Field(() => [AreasScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AreasScalarFieldEnum>;

    @Field(() => areasScalarWhereWithAggregatesInput, {nullable:true})
    having?: areasScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
