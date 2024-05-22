import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { countriesUpdateInput } from './countries-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { countriesWhereUniqueInput } from './countries-where-unique.input';

@ArgsType()
export class UpdateOnecountriesArgs {

    @Field(() => countriesUpdateInput, {nullable:false})
    @Type(() => countriesUpdateInput)
    data!: countriesUpdateInput;

    @Field(() => countriesWhereUniqueInput, {nullable:false})
    @Type(() => countriesWhereUniqueInput)
    where!: Prisma.AtLeast<countriesWhereUniqueInput, 'code'>;
}
