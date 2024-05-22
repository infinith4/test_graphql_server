import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { countriesWhereUniqueInput } from './countries-where-unique.input';
import { Type } from 'class-transformer';
import { countriesCreateInput } from './countries-create.input';
import { countriesUpdateInput } from './countries-update.input';

@ArgsType()
export class UpsertOnecountriesArgs {

    @Field(() => countriesWhereUniqueInput, {nullable:false})
    @Type(() => countriesWhereUniqueInput)
    where!: Prisma.AtLeast<countriesWhereUniqueInput, 'code'>;

    @Field(() => countriesCreateInput, {nullable:false})
    @Type(() => countriesCreateInput)
    create!: countriesCreateInput;

    @Field(() => countriesUpdateInput, {nullable:false})
    @Type(() => countriesUpdateInput)
    update!: countriesUpdateInput;
}
