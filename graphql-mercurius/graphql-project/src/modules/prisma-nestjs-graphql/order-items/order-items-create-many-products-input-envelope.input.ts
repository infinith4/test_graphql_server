import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_itemsCreateManyProductsInput } from './order-items-create-many-products.input';
import { Type } from 'class-transformer';

@InputType()
export class order_itemsCreateManyProductsInputEnvelope {

    @Field(() => [order_itemsCreateManyProductsInput], {nullable:false})
    @Type(() => order_itemsCreateManyProductsInput)
    data!: Array<order_itemsCreateManyProductsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
