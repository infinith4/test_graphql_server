import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { cartsUpdateManyWithoutUsersNestedInput } from '../carts/carts-update-many-without-users-nested.input';
import { customersUpdateOneWithoutUsersNestedInput } from '../customers/customers-update-one-without-users-nested.input';
import { ordersUpdateManyWithoutUsersNestedInput } from '../orders/orders-update-many-without-users-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class usersUpdateWithoutArticlesInput {

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

    @Field(() => cartsUpdateManyWithoutUsersNestedInput, {nullable:true})
    carts?: cartsUpdateManyWithoutUsersNestedInput;

    @Field(() => customersUpdateOneWithoutUsersNestedInput, {nullable:true})
    customers?: customersUpdateOneWithoutUsersNestedInput;

    @Field(() => ordersUpdateManyWithoutUsersNestedInput, {nullable:true})
    @Type(() => ordersUpdateManyWithoutUsersNestedInput)
    orders?: ordersUpdateManyWithoutUsersNestedInput;
}
