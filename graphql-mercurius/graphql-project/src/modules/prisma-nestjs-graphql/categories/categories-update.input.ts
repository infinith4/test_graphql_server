import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { product_categoriesUpdateManyWithoutCategoriesNestedInput } from '../product-categories/product-categories-update-many-without-categories-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class categoriesUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => product_categoriesUpdateManyWithoutCategoriesNestedInput, {nullable:true})
    @Type(() => product_categoriesUpdateManyWithoutCategoriesNestedInput)
    product_categories?: product_categoriesUpdateManyWithoutCategoriesNestedInput;
}
