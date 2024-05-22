import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { countries_continent_code } from '../prisma/countries-continent-code.enum';
import { merchantsUncheckedCreateNestedManyWithoutCountriesInput } from '../merchants/merchants-unchecked-create-nested-many-without-countries.input';
import { usersUncheckedCreateNestedManyWithoutCountriesInput } from '../users/users-unchecked-create-nested-many-without-countries.input';

@InputType()
export class countriesUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    code!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => countries_continent_code, {nullable:true})
    continent_code?: keyof typeof countries_continent_code;

    @Field(() => merchantsUncheckedCreateNestedManyWithoutCountriesInput, {nullable:true})
    merchants?: merchantsUncheckedCreateNestedManyWithoutCountriesInput;

    @Field(() => usersUncheckedCreateNestedManyWithoutCountriesInput, {nullable:true})
    users?: usersUncheckedCreateNestedManyWithoutCountriesInput;
}
