import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { employeesUpdateOneWithoutCustomersNestedInput } from '../employees/employees-update-one-without-customers-nested.input';
import { invoicesUpdateManyWithoutCustomersNestedInput } from '../invoices/invoices-update-many-without-customers-nested.input';
import { usersUpdateOneWithoutCustomersNestedInput } from '../users/users-update-one-without-customers-nested.input';

@InputType()
export class customersUpdateWithoutOrdersInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    user_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    first_name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    last_name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    company?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    city?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    state?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    country_code?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    postal_code?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone_number?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => employeesUpdateOneWithoutCustomersNestedInput, {nullable:true})
    employees?: employeesUpdateOneWithoutCustomersNestedInput;

    @Field(() => invoicesUpdateManyWithoutCustomersNestedInput, {nullable:true})
    invoices?: invoicesUpdateManyWithoutCustomersNestedInput;

    @Field(() => usersUpdateOneWithoutCustomersNestedInput, {nullable:true})
    users?: usersUpdateOneWithoutCustomersNestedInput;
}
