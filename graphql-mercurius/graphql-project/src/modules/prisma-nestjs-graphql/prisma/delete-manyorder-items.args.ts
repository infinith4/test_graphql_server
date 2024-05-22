import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_itemsWhereInput } from '../order-items/order-items-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyorderItemsArgs {

    @Field(() => order_itemsWhereInput, {nullable:true})
    @Type(() => order_itemsWhereInput)
    where?: order_itemsWhereInput;
}
