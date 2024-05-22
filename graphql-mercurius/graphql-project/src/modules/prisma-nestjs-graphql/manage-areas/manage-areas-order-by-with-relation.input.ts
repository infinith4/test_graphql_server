import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { employeesOrderByWithRelationInput } from '../employees/employees-order-by-with-relation.input';
import { areasOrderByWithRelationInput } from '../areas/areas-order-by-with-relation.input';

@InputType()
export class manage_areasOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    area_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employee_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => employeesOrderByWithRelationInput, {nullable:true})
    employees?: employeesOrderByWithRelationInput;

    @Field(() => areasOrderByWithRelationInput, {nullable:true})
    areas?: areasOrderByWithRelationInput;
}
