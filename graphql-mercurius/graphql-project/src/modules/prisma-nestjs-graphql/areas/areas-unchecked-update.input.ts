import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { manage_areasUncheckedUpdateManyWithoutAreasNestedInput } from '../manage-areas/manage-areas-unchecked-update-many-without-areas-nested.input';

@InputType()
export class areasUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    employee_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => manage_areasUncheckedUpdateManyWithoutAreasNestedInput, {nullable:true})
    manage_areas?: manage_areasUncheckedUpdateManyWithoutAreasNestedInput;
}
