import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_itemsWhereInput } from '../order-items/order-items-where.input';
import { Type } from 'class-transformer';
import { order_itemsOrderByWithRelationInput } from '../order-items/order-items-order-by-with-relation.input';
import { order_itemsWhereUniqueInput } from '../order-items/order-items-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Order_itemsScalarFieldEnum } from './order-items-scalar-field.enum';

@ArgsType()
export class FindFirstorderItemsOrThrowArgs {

    @Field(() => order_itemsWhereInput, {nullable:true})
    @Type(() => order_itemsWhereInput)
    where?: order_itemsWhereInput;

    @Field(() => [order_itemsOrderByWithRelationInput], {nullable:true})
    @Type(() => order_itemsOrderByWithRelationInput)
    orderBy?: Array<order_itemsOrderByWithRelationInput>;

    @Field(() => order_itemsWhereUniqueInput, {nullable:true})
    @Type(() => order_itemsWhereUniqueInput)
    cursor?: order_itemsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Order_itemsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Order_itemsScalarFieldEnum>;
}
