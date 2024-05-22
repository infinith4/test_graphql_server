import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { manage_areasUncheckedCreateNestedManyWithoutAreasInput } from '../manage-areas/manage-areas-unchecked-create-nested-many-without-areas.input';

@InputType()
export class areasUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    employee_id?: number;

    @Field(() => manage_areasUncheckedCreateNestedManyWithoutAreasInput, {nullable:true})
    manage_areas?: manage_areasUncheckedCreateNestedManyWithoutAreasInput;
}
