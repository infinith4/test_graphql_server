import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { usersUpdateOneWithoutCartsNestedInput } from '../users/users-update-one-without-carts-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class cartsUpdateWithoutCart_itemsInput {

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => usersUpdateOneWithoutCartsNestedInput, {nullable:true})
    @Type(() => usersUpdateOneWithoutCartsNestedInput)
    users?: usersUpdateOneWithoutCartsNestedInput;
}
