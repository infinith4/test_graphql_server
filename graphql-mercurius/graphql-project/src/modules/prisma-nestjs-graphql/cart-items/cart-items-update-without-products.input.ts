import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { cartsUpdateOneWithoutCart_itemsNestedInput } from '../carts/carts-update-one-without-cart-items-nested.input';

@InputType()
export class cart_itemsUpdateWithoutProductsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: IntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => cartsUpdateOneWithoutCart_itemsNestedInput, {nullable:true})
    carts?: cartsUpdateOneWithoutCart_itemsNestedInput;
}
