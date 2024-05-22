import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { merchant_imagesUncheckedUpdateManyWithoutMerchantsNestedInput } from '../merchant-images/merchant-images-unchecked-update-many-without-merchants-nested.input';
import { productsUncheckedUpdateManyWithoutMerchantsNestedInput } from '../products/products-unchecked-update-many-without-merchants-nested.input';

@InputType()
export class merchantsUncheckedUpdateWithoutCountriesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    admin_id?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => merchant_imagesUncheckedUpdateManyWithoutMerchantsNestedInput, {nullable:true})
    merchant_images?: merchant_imagesUncheckedUpdateManyWithoutMerchantsNestedInput;

    @Field(() => productsUncheckedUpdateManyWithoutMerchantsNestedInput, {nullable:true})
    products?: productsUncheckedUpdateManyWithoutMerchantsNestedInput;
}
