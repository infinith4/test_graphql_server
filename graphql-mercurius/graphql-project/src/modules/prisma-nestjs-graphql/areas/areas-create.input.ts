import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { manage_areasCreateNestedManyWithoutAreasInput } from '../manage-areas/manage-areas-create-nested-many-without-areas.input';

@InputType()
export class areasCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    employee_id?: number;

    @Field(() => manage_areasCreateNestedManyWithoutAreasInput, {nullable:true})
    manage_areas?: manage_areasCreateNestedManyWithoutAreasInput;
}
