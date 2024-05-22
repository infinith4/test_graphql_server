import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_itemsUpdateInput } from '../order-items/order-items-update.input';
import { Type } from 'class-transformer';
import { order_itemsWhereUniqueInput } from '../order-items/order-items-where-unique.input';

@ArgsType()
export class UpdateOneorderItemsArgs {

    @Field(() => order_itemsUpdateInput, {nullable:false})
    @Type(() => order_itemsUpdateInput)
    data!: order_itemsUpdateInput;

    @Field(() => order_itemsWhereUniqueInput, {nullable:false})
    @Type(() => order_itemsWhereUniqueInput)
    where!: order_itemsWhereUniqueInput;
}
