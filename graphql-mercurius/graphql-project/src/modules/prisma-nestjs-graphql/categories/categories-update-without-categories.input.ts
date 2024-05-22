import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { categoriesUpdateManyWithoutCategoriesNestedInput } from './categories-update-many-without-categories-nested.input';
import { productsUpdateManyWithoutCategoriesNestedInput } from '../products/products-update-many-without-categories-nested.input';

@InputType()
export class categoriesUpdateWithoutCategoriesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => categoriesUpdateManyWithoutCategoriesNestedInput, {nullable:true})
    other_categories?: categoriesUpdateManyWithoutCategoriesNestedInput;

    @Field(() => productsUpdateManyWithoutCategoriesNestedInput, {nullable:true})
    products?: productsUpdateManyWithoutCategoriesNestedInput;
}
