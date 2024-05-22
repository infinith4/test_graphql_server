import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class product_categoriesUncheckedUpdateManyWithoutCategoriesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    product_id?: IntFieldUpdateOperationsInput;
}
