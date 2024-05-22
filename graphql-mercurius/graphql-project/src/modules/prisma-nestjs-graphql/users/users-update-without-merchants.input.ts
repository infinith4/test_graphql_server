import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { articlesUpdateManyWithoutUsersNestedInput } from '../articles/articles-update-many-without-users-nested.input';
import { customersUpdateOneRequiredWithoutUsersNestedInput } from '../customers/customers-update-one-required-without-users-nested.input';
import { profilesUpdateOneRequiredWithoutUsersNestedInput } from '../profiles/profiles-update-one-required-without-users-nested.input';
import { countriesUpdateOneWithoutUsersNestedInput } from '../countries/countries-update-one-without-users-nested.input';

@InputType()
export class usersUpdateWithoutMerchantsInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    first_name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    last_name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone_number?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    gender?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar_url?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    last_login?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => articlesUpdateManyWithoutUsersNestedInput, {nullable:true})
    articles?: articlesUpdateManyWithoutUsersNestedInput;

    @Field(() => customersUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    customers?: customersUpdateOneRequiredWithoutUsersNestedInput;

    @Field(() => profilesUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    profiles?: profilesUpdateOneRequiredWithoutUsersNestedInput;

    @Field(() => countriesUpdateOneWithoutUsersNestedInput, {nullable:true})
    countries?: countriesUpdateOneWithoutUsersNestedInput;
}
