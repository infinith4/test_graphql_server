import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { cart_itemsUpdateManyWithoutCartsNestedInput } from '../cart-items/cart-items-update-many-without-carts-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class cartsUpdateWithoutUsersInput {

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => cart_itemsUpdateManyWithoutCartsNestedInput, {nullable:true})
    @Type(() => cart_itemsUpdateManyWithoutCartsNestedInput)
    cart_items?: cart_itemsUpdateManyWithoutCartsNestedInput;
}
