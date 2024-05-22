import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_itemsWhereUniqueInput } from '../order-items/order-items-where-unique.input';
import { Type } from 'class-transformer';
import { order_itemsCreateInput } from '../order-items/order-items-create.input';
import { order_itemsUpdateInput } from '../order-items/order-items-update.input';

@ArgsType()
export class UpsertOneorderItemsArgs {

    @Field(() => order_itemsWhereUniqueInput, {nullable:false})
    @Type(() => order_itemsWhereUniqueInput)
    where!: order_itemsWhereUniqueInput;

    @Field(() => order_itemsCreateInput, {nullable:false})
    @Type(() => order_itemsCreateInput)
    create!: order_itemsCreateInput;

    @Field(() => order_itemsUpdateInput, {nullable:false})
    @Type(() => order_itemsUpdateInput)
    update!: order_itemsUpdateInput;
}
