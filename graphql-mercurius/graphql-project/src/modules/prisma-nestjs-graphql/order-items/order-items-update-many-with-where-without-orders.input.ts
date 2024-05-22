import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_itemsScalarWhereInput } from './order-items-scalar-where.input';
import { Type } from 'class-transformer';
import { order_itemsUpdateManyMutationInput } from './order-items-update-many-mutation.input';

@InputType()
export class order_itemsUpdateManyWithWhereWithoutOrdersInput {

    @Field(() => order_itemsScalarWhereInput, {nullable:false})
    @Type(() => order_itemsScalarWhereInput)
    where!: order_itemsScalarWhereInput;

    @Field(() => order_itemsUpdateManyMutationInput, {nullable:false})
    @Type(() => order_itemsUpdateManyMutationInput)
    data!: order_itemsUpdateManyMutationInput;
}
