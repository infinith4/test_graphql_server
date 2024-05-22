import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { cartsUpdateOneWithoutCart_itemsNestedInput } from '../carts/carts-update-one-without-cart-items-nested.input';
import { productsUpdateOneWithoutCart_itemsNestedInput } from '../products/products-update-one-without-cart-items-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class cart_itemsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: IntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => cartsUpdateOneWithoutCart_itemsNestedInput, {nullable:true})
    carts?: cartsUpdateOneWithoutCart_itemsNestedInput;

    @Field(() => productsUpdateOneWithoutCart_itemsNestedInput, {nullable:true})
    @Type(() => productsUpdateOneWithoutCart_itemsNestedInput)
    products?: productsUpdateOneWithoutCart_itemsNestedInput;
}
