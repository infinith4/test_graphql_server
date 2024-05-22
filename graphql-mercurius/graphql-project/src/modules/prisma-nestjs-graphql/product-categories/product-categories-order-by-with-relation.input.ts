import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { categoriesOrderByWithRelationInput } from '../categories/categories-order-by-with-relation.input';
import { productsOrderByWithRelationInput } from '../products/products-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class product_categoriesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    product_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category_id?: keyof typeof SortOrder;

    @Field(() => categoriesOrderByWithRelationInput, {nullable:true})
    categories?: categoriesOrderByWithRelationInput;

    @Field(() => productsOrderByWithRelationInput, {nullable:true})
    @Type(() => productsOrderByWithRelationInput)
    products?: productsOrderByWithRelationInput;
}
