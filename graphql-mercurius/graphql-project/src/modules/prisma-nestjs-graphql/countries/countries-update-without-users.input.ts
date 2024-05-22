import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumcountries_continent_codeFieldUpdateOperationsInput } from '../prisma/nullable-enumcountries-continent-code-field-update-operations.input';
import { merchantsUpdateManyWithoutCountriesNestedInput } from '../merchants/merchants-update-many-without-countries-nested.input';

@InputType()
export class countriesUpdateWithoutUsersInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    code?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumcountries_continent_codeFieldUpdateOperationsInput, {nullable:true})
    continent_code?: NullableEnumcountries_continent_codeFieldUpdateOperationsInput;

    @Field(() => merchantsUpdateManyWithoutCountriesNestedInput, {nullable:true})
    merchants?: merchantsUpdateManyWithoutCountriesNestedInput;
}
