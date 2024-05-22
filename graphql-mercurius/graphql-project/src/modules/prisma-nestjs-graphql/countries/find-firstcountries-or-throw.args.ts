import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { countriesWhereInput } from './countries-where.input';
import { Type } from 'class-transformer';
import { countriesOrderByWithRelationInput } from './countries-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { countriesWhereUniqueInput } from './countries-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CountriesScalarFieldEnum } from '../prisma/countries-scalar-field.enum';

@ArgsType()
export class FindFirstcountriesOrThrowArgs {

    @Field(() => countriesWhereInput, {nullable:true})
    @Type(() => countriesWhereInput)
    where?: countriesWhereInput;

    @Field(() => [countriesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<countriesOrderByWithRelationInput>;

    @Field(() => countriesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<countriesWhereUniqueInput, 'code'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CountriesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CountriesScalarFieldEnum>;
}
