import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableEnumorders_statusFieldUpdateOperationsInput } from '../prisma/nullable-enumorders-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { customersUpdateOneRequiredWithoutOrdersNestedInput } from '../customers/customers-update-one-required-without-orders-nested.input';

@InputType()
export class ordersUpdateWithoutPayment_transactionsInput {

    @Field(() => NullableEnumorders_statusFieldUpdateOperationsInput, {nullable:true})
    status?: NullableEnumorders_statusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => customersUpdateOneRequiredWithoutOrdersNestedInput, {nullable:true})
    customers?: customersUpdateOneRequiredWithoutOrdersNestedInput;
}
