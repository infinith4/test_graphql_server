import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_itemsWhereUniqueInput } from '../order-items/order-items-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueorderItemsOrThrowArgs {

    @Field(() => order_itemsWhereUniqueInput, {nullable:false})
    @Type(() => order_itemsWhereUniqueInput)
    where!: order_itemsWhereUniqueInput;
}
