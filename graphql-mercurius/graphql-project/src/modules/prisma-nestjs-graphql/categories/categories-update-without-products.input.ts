import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { categoriesUpdateOneWithoutOther_categoriesNestedInput } from './categories-update-one-without-other-categories-nested.input';
import { categoriesUpdateManyWithoutCategoriesNestedInput } from './categories-update-many-without-categories-nested.input';

@InputType()
export class categoriesUpdateWithoutProductsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => categoriesUpdateOneWithoutOther_categoriesNestedInput, {nullable:true})
    categories?: categoriesUpdateOneWithoutOther_categoriesNestedInput;

    @Field(() => categoriesUpdateManyWithoutCategoriesNestedInput, {nullable:true})
    other_categories?: categoriesUpdateManyWithoutCategoriesNestedInput;
}
