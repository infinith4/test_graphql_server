import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cart_itemsCreateManyProductsInput } from './cart-items-create-many-products.input';
import { Type } from 'class-transformer';

@InputType()
export class cart_itemsCreateManyProductsInputEnvelope {

    @Field(() => [cart_itemsCreateManyProductsInput], {nullable:false})
    @Type(() => cart_itemsCreateManyProductsInput)
    data!: Array<cart_itemsCreateManyProductsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
