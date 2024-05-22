import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class product_categoriesUncheckedUpdateManyWithoutProductsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    category_id?: IntFieldUpdateOperationsInput;
}
