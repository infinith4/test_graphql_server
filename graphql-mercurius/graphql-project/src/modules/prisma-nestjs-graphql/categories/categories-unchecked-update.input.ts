import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { product_categoriesUncheckedUpdateManyWithoutCategoriesNestedInput } from '../product-categories/product-categories-unchecked-update-many-without-categories-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class categoriesUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => product_categoriesUncheckedUpdateManyWithoutCategoriesNestedInput, {nullable:true})
    @Type(() => product_categoriesUncheckedUpdateManyWithoutCategoriesNestedInput)
    product_categories?: product_categoriesUncheckedUpdateManyWithoutCategoriesNestedInput;
}
