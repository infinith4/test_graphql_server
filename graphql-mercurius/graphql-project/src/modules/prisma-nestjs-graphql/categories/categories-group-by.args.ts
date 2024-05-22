import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categoriesWhereInput } from './categories-where.input';
import { Type } from 'class-transformer';
import { categoriesOrderByWithAggregationInput } from './categories-order-by-with-aggregation.input';
import { CategoriesScalarFieldEnum } from '../prisma/categories-scalar-field.enum';
import { categoriesScalarWhereWithAggregatesInput } from './categories-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class categoriesGroupByArgs {

    @Field(() => categoriesWhereInput, {nullable:true})
    @Type(() => categoriesWhereInput)
    where?: categoriesWhereInput;

    @Field(() => [categoriesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<categoriesOrderByWithAggregationInput>;

    @Field(() => [CategoriesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CategoriesScalarFieldEnum>;

    @Field(() => categoriesScalarWhereWithAggregatesInput, {nullable:true})
    having?: categoriesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
