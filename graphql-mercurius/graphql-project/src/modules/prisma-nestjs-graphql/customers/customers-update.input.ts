import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { customer_addressesUpdateManyWithoutCustomersNestedInput } from '../customer-addresses/customer-addresses-update-many-without-customers-nested.input';
import { usersUpdateOneRequiredWithoutCustomersNestedInput } from '../users/users-update-one-required-without-customers-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class customersUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => customer_addressesUpdateManyWithoutCustomersNestedInput, {nullable:true})
    customer_addresses?: customer_addressesUpdateManyWithoutCustomersNestedInput;

    @Field(() => usersUpdateOneRequiredWithoutCustomersNestedInput, {nullable:true})
    @Type(() => usersUpdateOneRequiredWithoutCustomersNestedInput)
    users?: usersUpdateOneRequiredWithoutCustomersNestedInput;
}
