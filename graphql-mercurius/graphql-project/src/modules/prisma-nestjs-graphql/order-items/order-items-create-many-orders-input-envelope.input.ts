import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_itemsCreateManyOrdersInput } from './order-items-create-many-orders.input';
import { Type } from 'class-transformer';

@InputType()
export class order_itemsCreateManyOrdersInputEnvelope {

    @Field(() => [order_itemsCreateManyOrdersInput], {nullable:false})
    @Type(() => order_itemsCreateManyOrdersInput)
    data!: Array<order_itemsCreateManyOrdersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
