import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { employeesUpdateOneRequiredWithoutManage_areasNestedInput } from '../employees/employees-update-one-required-without-manage-areas-nested.input';

@InputType()
export class manage_areasUpdateWithoutAreasInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => employeesUpdateOneRequiredWithoutManage_areasNestedInput, {nullable:true})
    employees?: employeesUpdateOneRequiredWithoutManage_areasNestedInput;
}
