import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { manage_areasOrderByRelationAggregateInput } from '../manage-areas/manage-areas-order-by-relation-aggregate.input';

@InputType()
export class areasOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    name?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    employee_id?: SortOrderInput;

    @Field(() => manage_areasOrderByRelationAggregateInput, {nullable:true})
    manage_areas?: manage_areasOrderByRelationAggregateInput;
}
