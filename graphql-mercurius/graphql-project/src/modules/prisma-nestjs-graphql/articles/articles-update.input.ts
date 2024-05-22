import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableEnumarticles_statusFieldUpdateOperationsInput } from '../prisma/nullable-enumarticles-status-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { usersUpdateOneWithoutArticlesNestedInput } from '../users/users-update-one-without-articles-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class articlesUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => NullableEnumarticles_statusFieldUpdateOperationsInput, {nullable:true})
    status?: NullableEnumarticles_statusFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => usersUpdateOneWithoutArticlesNestedInput, {nullable:true})
    @Type(() => usersUpdateOneWithoutArticlesNestedInput)
    users?: usersUpdateOneWithoutArticlesNestedInput;
}
