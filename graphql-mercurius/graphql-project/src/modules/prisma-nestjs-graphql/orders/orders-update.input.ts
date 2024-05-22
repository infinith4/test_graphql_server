import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Enumorders_statusFieldUpdateOperationsInput } from '../prisma/enumorders-status-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { order_itemsUpdateManyWithoutOrdersNestedInput } from '../order-items/order-items-update-many-without-orders-nested.input';
import { usersUpdateOneWithoutOrdersNestedInput } from '../users/users-update-one-without-orders-nested.input';
import { paymentsUpdateManyWithoutOrdersNestedInput } from '../payments/payments-update-many-without-orders-nested.input';

@InputType()
export class ordersUpdateInput {

    @Field(() => Enumorders_statusFieldUpdateOperationsInput, {nullable:true})
    status?: Enumorders_statusFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    total?: DecimalFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => order_itemsUpdateManyWithoutOrdersNestedInput, {nullable:true})
    @Type(() => order_itemsUpdateManyWithoutOrdersNestedInput)
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput;

    @Field(() => usersUpdateOneWithoutOrdersNestedInput, {nullable:true})
    @Type(() => usersUpdateOneWithoutOrdersNestedInput)
    users?: usersUpdateOneWithoutOrdersNestedInput;

    @Field(() => paymentsUpdateManyWithoutOrdersNestedInput, {nullable:true})
    @Type(() => paymentsUpdateManyWithoutOrdersNestedInput)
    payments?: paymentsUpdateManyWithoutOrdersNestedInput;
}
