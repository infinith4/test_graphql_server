import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { orders_status } from './orders-status.enum';

@InputType()
export class Enumorders_statusFieldUpdateOperationsInput {

    @Field(() => orders_status, {nullable:true})
    set?: keyof typeof orders_status;
}
