import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ordersUpdateOneRequiredWithoutOrder_itemsNestedInput } from '../orders/orders-update-one-required-without-order-items-nested.input';

@InputType()
export class order_itemsUpdateWithoutProductsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: IntFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    price?: DecimalFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ordersUpdateOneRequiredWithoutOrder_itemsNestedInput, {nullable:true})
    @Type(() => ordersUpdateOneRequiredWithoutOrder_itemsNestedInput)
    orders?: ordersUpdateOneRequiredWithoutOrder_itemsNestedInput;
}
