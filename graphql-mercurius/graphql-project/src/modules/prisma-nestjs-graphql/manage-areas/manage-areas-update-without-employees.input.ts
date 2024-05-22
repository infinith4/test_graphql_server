import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { areasUpdateOneRequiredWithoutManage_areasNestedInput } from '../areas/areas-update-one-required-without-manage-areas-nested.input';

@InputType()
export class manage_areasUpdateWithoutEmployeesInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => areasUpdateOneRequiredWithoutManage_areasNestedInput, {nullable:true})
    areas?: areasUpdateOneRequiredWithoutManage_areasNestedInput;
}
