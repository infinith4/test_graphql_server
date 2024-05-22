import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { countries_continent_code } from './countries-continent-code.enum';

@InputType()
export class NullableEnumcountries_continent_codeFieldUpdateOperationsInput {

    @Field(() => countries_continent_code, {nullable:true})
    set?: keyof typeof countries_continent_code;
}
