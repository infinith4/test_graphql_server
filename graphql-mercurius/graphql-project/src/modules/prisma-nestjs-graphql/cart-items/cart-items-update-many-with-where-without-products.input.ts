import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cart_itemsScalarWhereInput } from './cart-items-scalar-where.input';
import { Type } from 'class-transformer';
import { cart_itemsUpdateManyMutationInput } from './cart-items-update-many-mutation.input';

@InputType()
export class cart_itemsUpdateManyWithWhereWithoutProductsInput {

    @Field(() => cart_itemsScalarWhereInput, {nullable:false})
    @Type(() => cart_itemsScalarWhereInput)
    where!: cart_itemsScalarWhereInput;

    @Field(() => cart_itemsUpdateManyMutationInput, {nullable:false})
    @Type(() => cart_itemsUpdateManyMutationInput)
    data!: cart_itemsUpdateManyMutationInput;
}
