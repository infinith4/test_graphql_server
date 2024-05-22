import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumproducts_statusFieldUpdateOperationsInput } from '../prisma/nullable-enumproducts-status-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { cart_itemsUncheckedUpdateManyWithoutProductsNestedInput } from '../cart-items/cart-items-unchecked-update-many-without-products-nested.input';
import { order_itemsUncheckedUpdateManyWithoutProductsNestedInput } from '../order-items/order-items-unchecked-update-many-without-products-nested.input';
import { product_categoriesUncheckedUpdateManyWithoutProductsNestedInput } from '../product-categories/product-categories-unchecked-update-many-without-products-nested.input';

@InputType()
export class productsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumproducts_statusFieldUpdateOperationsInput, {nullable:true})
    status?: NullableEnumproducts_statusFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    price?: DecimalFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    stock?: IntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => cart_itemsUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    @Type(() => cart_itemsUncheckedUpdateManyWithoutProductsNestedInput)
    cart_items?: cart_itemsUncheckedUpdateManyWithoutProductsNestedInput;

    @Field(() => order_itemsUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    @Type(() => order_itemsUncheckedUpdateManyWithoutProductsNestedInput)
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput;

    @Field(() => product_categoriesUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    @Type(() => product_categoriesUncheckedUpdateManyWithoutProductsNestedInput)
    product_categories?: product_categoriesUncheckedUpdateManyWithoutProductsNestedInput;
}
