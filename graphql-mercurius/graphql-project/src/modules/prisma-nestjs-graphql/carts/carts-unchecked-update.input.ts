import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { cart_itemsUncheckedUpdateManyWithoutCartsNestedInput } from '../cart-items/cart-items-unchecked-update-many-without-carts-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class cartsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    user_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => cart_itemsUncheckedUpdateManyWithoutCartsNestedInput, {nullable:true})
    @Type(() => cart_itemsUncheckedUpdateManyWithoutCartsNestedInput)
    cart_items?: cart_itemsUncheckedUpdateManyWithoutCartsNestedInput;
}
