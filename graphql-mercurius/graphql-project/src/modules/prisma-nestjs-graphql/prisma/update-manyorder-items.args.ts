import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_itemsUpdateManyMutationInput } from '../order-items/order-items-update-many-mutation.input';
import { Type } from 'class-transformer';
import { order_itemsWhereInput } from '../order-items/order-items-where.input';

@ArgsType()
export class UpdateManyorderItemsArgs {

    @Field(() => order_itemsUpdateManyMutationInput, {nullable:false})
    @Type(() => order_itemsUpdateManyMutationInput)
    data!: order_itemsUpdateManyMutationInput;

    @Field(() => order_itemsWhereInput, {nullable:true})
    @Type(() => order_itemsWhereInput)
    where?: order_itemsWhereInput;
}
