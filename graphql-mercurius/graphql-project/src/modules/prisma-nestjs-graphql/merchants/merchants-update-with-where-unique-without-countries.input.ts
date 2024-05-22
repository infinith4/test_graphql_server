import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { merchantsWhereUniqueInput } from './merchants-where-unique.input';
import { Type } from 'class-transformer';
import { merchantsUpdateWithoutCountriesInput } from './merchants-update-without-countries.input';

@InputType()
export class merchantsUpdateWithWhereUniqueWithoutCountriesInput {

    @Field(() => merchantsWhereUniqueInput, {nullable:false})
    @Type(() => merchantsWhereUniqueInput)
    where!: Prisma.AtLeast<merchantsWhereUniqueInput, 'id'>;

    @Field(() => merchantsUpdateWithoutCountriesInput, {nullable:false})
    @Type(() => merchantsUpdateWithoutCountriesInput)
    data!: merchantsUpdateWithoutCountriesInput;
}
