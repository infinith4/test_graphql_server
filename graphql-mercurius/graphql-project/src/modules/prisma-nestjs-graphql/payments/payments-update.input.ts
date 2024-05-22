import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ordersUpdateOneWithoutPaymentsNestedInput } from '../orders/orders-update-one-without-payments-nested.input';

@InputType()
export class paymentsUpdateInput {

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    amount?: DecimalFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    payment_method?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    payment_status?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ordersUpdateOneWithoutPaymentsNestedInput, {nullable:true})
    @Type(() => ordersUpdateOneWithoutPaymentsNestedInput)
    orders?: ordersUpdateOneWithoutPaymentsNestedInput;
}
