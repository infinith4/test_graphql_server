import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { countriesWhereInput } from './countries-where.input';
import { Type } from 'class-transformer';
import { countriesOrderByWithAggregationInput } from './countries-order-by-with-aggregation.input';
import { CountriesScalarFieldEnum } from '../prisma/countries-scalar-field.enum';
import { countriesScalarWhereWithAggregatesInput } from './countries-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class countriesGroupByArgs {

    @Field(() => countriesWhereInput, {nullable:true})
    @Type(() => countriesWhereInput)
    where?: countriesWhereInput;

    @Field(() => [countriesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<countriesOrderByWithAggregationInput>;

    @Field(() => [CountriesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CountriesScalarFieldEnum>;

    @Field(() => countriesScalarWhereWithAggregatesInput, {nullable:true})
    having?: countriesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
