import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumproducts_statusFieldUpdateOperationsInput } from '../prisma/nullable-enumproducts-status-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { order_itemsUpdateManyWithoutProductsNestedInput } from '../order-items/order-items-update-many-without-products-nested.input';
import { product_categoriesUpdateManyWithoutProductsNestedInput } from '../product-categories/product-categories-update-many-without-products-nested.input';

@InputType()
export class productsUpdateWithoutCart_itemsInput {

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

    @Field(() => order_itemsUpdateManyWithoutProductsNestedInput, {nullable:true})
    @Type(() => order_itemsUpdateManyWithoutProductsNestedInput)
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput;

    @Field(() => product_categoriesUpdateManyWithoutProductsNestedInput, {nullable:true})
    @Type(() => product_categoriesUpdateManyWithoutProductsNestedInput)
    product_categories?: product_categoriesUpdateManyWithoutProductsNestedInput;
}
