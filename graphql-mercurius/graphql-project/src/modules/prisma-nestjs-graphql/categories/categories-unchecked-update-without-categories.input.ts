import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { categoriesUncheckedUpdateManyWithoutCategoriesNestedInput } from './categories-unchecked-update-many-without-categories-nested.input';
import { productsUncheckedUpdateManyWithoutCategoriesNestedInput } from '../products/products-unchecked-update-many-without-categories-nested.input';

@InputType()
export class categoriesUncheckedUpdateWithoutCategoriesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => categoriesUncheckedUpdateManyWithoutCategoriesNestedInput, {nullable:true})
    other_categories?: categoriesUncheckedUpdateManyWithoutCategoriesNestedInput;

    @Field(() => productsUncheckedUpdateManyWithoutCategoriesNestedInput, {nullable:true})
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput;
}
