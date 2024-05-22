import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableEnumorders_statusFieldUpdateOperationsInput } from '../prisma/nullable-enumorders-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { payment_transactionsUncheckedUpdateManyWithoutOrdersNestedInput } from '../payment-transactions/payment-transactions-unchecked-update-many-without-orders-nested.input';

@InputType()
export class ordersUncheckedUpdateWithoutCustomersInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableEnumorders_statusFieldUpdateOperationsInput, {nullable:true})
    status?: NullableEnumorders_statusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => payment_transactionsUncheckedUpdateManyWithoutOrdersNestedInput, {nullable:true})
    payment_transactions?: payment_transactionsUncheckedUpdateManyWithoutOrdersNestedInput;
}
