import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class product_categoriesCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    product_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category_id?: keyof typeof SortOrder;
}
