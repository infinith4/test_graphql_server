import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_itemsCreateInput } from '../order-items/order-items-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneorderItemsArgs {

    @Field(() => order_itemsCreateInput, {nullable:false})
    @Type(() => order_itemsCreateInput)
    data!: order_itemsCreateInput;
}
