import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { merchant_imagesOrderByRelationAggregateInput } from '../merchant-images/merchant-images-order-by-relation-aggregate.input';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { countriesOrderByWithRelationInput } from '../countries/countries-order-by-with-relation.input';
import { productsOrderByRelationAggregateInput } from '../products/products-order-by-relation-aggregate.input';

@InputType()
export class merchantsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    name?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    admin_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    country_code?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => merchant_imagesOrderByRelationAggregateInput, {nullable:true})
    merchant_images?: merchant_imagesOrderByRelationAggregateInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    users?: usersOrderByWithRelationInput;

    @Field(() => countriesOrderByWithRelationInput, {nullable:true})
    countries?: countriesOrderByWithRelationInput;

    @Field(() => productsOrderByRelationAggregateInput, {nullable:true})
    products?: productsOrderByRelationAggregateInput;
}
