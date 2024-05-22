import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { merchant_imagesUpdateManyWithoutMerchantsNestedInput } from '../merchant-images/merchant-images-update-many-without-merchants-nested.input';
import { usersUpdateOneRequiredWithoutMerchantsNestedInput } from '../users/users-update-one-required-without-merchants-nested.input';
import { countriesUpdateOneWithoutMerchantsNestedInput } from '../countries/countries-update-one-without-merchants-nested.input';
import { productsUpdateManyWithoutMerchantsNestedInput } from '../products/products-update-many-without-merchants-nested.input';

@InputType()
export class merchantsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => merchant_imagesUpdateManyWithoutMerchantsNestedInput, {nullable:true})
    merchant_images?: merchant_imagesUpdateManyWithoutMerchantsNestedInput;

    @Field(() => usersUpdateOneRequiredWithoutMerchantsNestedInput, {nullable:true})
    users?: usersUpdateOneRequiredWithoutMerchantsNestedInput;

    @Field(() => countriesUpdateOneWithoutMerchantsNestedInput, {nullable:true})
    countries?: countriesUpdateOneWithoutMerchantsNestedInput;

    @Field(() => productsUpdateManyWithoutMerchantsNestedInput, {nullable:true})
    products?: productsUpdateManyWithoutMerchantsNestedInput;
}
