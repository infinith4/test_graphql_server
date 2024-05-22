import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { merchantsOrderByWithRelationInput } from '../merchants/merchants-order-by-with-relation.input';

@InputType()
export class merchant_imagesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    url?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    merchant_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => merchantsOrderByWithRelationInput, {nullable:true})
    merchants?: merchantsOrderByWithRelationInput;
}
