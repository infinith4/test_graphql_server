import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { manage_areasUpdateManyWithoutAreasNestedInput } from '../manage-areas/manage-areas-update-many-without-areas-nested.input';

@InputType()
export class areasUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    employee_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => manage_areasUpdateManyWithoutAreasNestedInput, {nullable:true})
    manage_areas?: manage_areasUpdateManyWithoutAreasNestedInput;
}
