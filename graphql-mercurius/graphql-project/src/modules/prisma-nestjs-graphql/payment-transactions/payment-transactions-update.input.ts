import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ordersUpdateOneRequiredWithoutPayment_transactionsNestedInput } from '../orders/orders-update-one-required-without-payment-transactions-nested.input';

@InputType()
export class payment_transactionsUpdateInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    amount?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    status?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    payment_method?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    transaction_id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ordersUpdateOneRequiredWithoutPayment_transactionsNestedInput, {nullable:true})
    orders?: ordersUpdateOneRequiredWithoutPayment_transactionsNestedInput;
}
