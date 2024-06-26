import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class manage_areasCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    area_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employee_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;
}
