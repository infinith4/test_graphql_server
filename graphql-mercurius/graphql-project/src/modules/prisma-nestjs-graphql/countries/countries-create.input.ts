import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { countries_continent_code } from '../prisma/countries-continent-code.enum';
import { merchantsCreateNestedManyWithoutCountriesInput } from '../merchants/merchants-create-nested-many-without-countries.input';
import { usersCreateNestedManyWithoutCountriesInput } from '../users/users-create-nested-many-without-countries.input';

@InputType()
export class countriesCreateInput {

    @Field(() => Int, {nullable:false})
    code!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => countries_continent_code, {nullable:true})
    continent_code?: keyof typeof countries_continent_code;

    @Field(() => merchantsCreateNestedManyWithoutCountriesInput, {nullable:true})
    merchants?: merchantsCreateNestedManyWithoutCountriesInput;

    @Field(() => usersCreateNestedManyWithoutCountriesInput, {nullable:true})
    users?: usersCreateNestedManyWithoutCountriesInput;
}
