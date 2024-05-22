import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { products_status } from './products-status.enum';

@InputType()
export class NullableEnumproducts_statusFieldUpdateOperationsInput {

    @Field(() => products_status, {nullable:true})
    set?: keyof typeof products_status;
}
