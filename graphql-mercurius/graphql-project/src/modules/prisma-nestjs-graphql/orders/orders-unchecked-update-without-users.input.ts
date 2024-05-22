import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { Enumorders_statusFieldUpdateOperationsInput } from '../prisma/enumorders-status-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { order_itemsUncheckedUpdateManyWithoutOrdersNestedInput } from '../order-items/order-items-unchecked-update-many-without-orders-nested.input';
import { paymentsUncheckedUpdateManyWithoutOrdersNestedInput } from '../payments/payments-unchecked-update-many-without-orders-nested.input';

@InputType()
export class ordersUncheckedUpdateWithoutUsersInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => Enumorders_statusFieldUpdateOperationsInput, {nullable:true})
    status?: Enumorders_statusFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    total?: DecimalFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => order_itemsUncheckedUpdateManyWithoutOrdersNestedInput, {nullable:true})
    @Type(() => order_itemsUncheckedUpdateManyWithoutOrdersNestedInput)
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput;

    @Field(() => paymentsUncheckedUpdateManyWithoutOrdersNestedInput, {nullable:true})
    @Type(() => paymentsUncheckedUpdateManyWithoutOrdersNestedInput)
    payments?: paymentsUncheckedUpdateManyWithoutOrdersNestedInput;
}
