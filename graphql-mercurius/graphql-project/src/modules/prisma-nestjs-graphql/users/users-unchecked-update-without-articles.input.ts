import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { cartsUncheckedUpdateManyWithoutUsersNestedInput } from '../carts/carts-unchecked-update-many-without-users-nested.input';
import { customersUncheckedUpdateOneWithoutUsersNestedInput } from '../customers/customers-unchecked-update-one-without-users-nested.input';
import { ordersUncheckedUpdateManyWithoutUsersNestedInput } from '../orders/orders-unchecked-update-many-without-users-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class usersUncheckedUpdateWithoutArticlesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    hashed_password?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => cartsUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    carts?: cartsUncheckedUpdateManyWithoutUsersNestedInput;

    @Field(() => customersUncheckedUpdateOneWithoutUsersNestedInput, {nullable:true})
    customers?: customersUncheckedUpdateOneWithoutUsersNestedInput;

    @Field(() => ordersUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    @Type(() => ordersUncheckedUpdateManyWithoutUsersNestedInput)
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput;
}
