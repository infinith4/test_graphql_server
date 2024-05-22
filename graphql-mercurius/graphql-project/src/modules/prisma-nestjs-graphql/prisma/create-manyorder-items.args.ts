import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_itemsCreateManyInput } from '../order-items/order-items-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyorderItemsArgs {

    @Field(() => [order_itemsCreateManyInput], {nullable:false})
    @Type(() => order_itemsCreateManyInput)
    data!: Array<order_itemsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
