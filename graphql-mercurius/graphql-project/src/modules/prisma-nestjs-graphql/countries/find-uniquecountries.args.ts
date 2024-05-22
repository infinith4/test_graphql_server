import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { countriesWhereUniqueInput } from './countries-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquecountriesArgs {

    @Field(() => countriesWhereUniqueInput, {nullable:false})
    @Type(() => countriesWhereUniqueInput)
    where!: Prisma.AtLeast<countriesWhereUniqueInput, 'code'>;
}
