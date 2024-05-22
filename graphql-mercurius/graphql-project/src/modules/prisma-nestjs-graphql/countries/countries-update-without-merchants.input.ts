import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumcountries_continent_codeFieldUpdateOperationsInput } from '../prisma/nullable-enumcountries-continent-code-field-update-operations.input';
import { usersUpdateManyWithoutCountriesNestedInput } from '../users/users-update-many-without-countries-nested.input';

@InputType()
export class countriesUpdateWithoutMerchantsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    code?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumcountries_continent_codeFieldUpdateOperationsInput, {nullable:true})
    continent_code?: NullableEnumcountries_continent_codeFieldUpdateOperationsInput;

    @Field(() => usersUpdateManyWithoutCountriesNestedInput, {nullable:true})
    users?: usersUpdateManyWithoutCountriesNestedInput;
}
