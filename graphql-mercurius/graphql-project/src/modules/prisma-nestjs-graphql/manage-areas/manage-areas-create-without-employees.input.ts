import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { areasCreateNestedOneWithoutManage_areasInput } from '../areas/areas-create-nested-one-without-manage-areas.input';

@InputType()
export class manage_areasCreateWithoutEmployeesInput {

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => areasCreateNestedOneWithoutManage_areasInput, {nullable:false})
    areas!: areasCreateNestedOneWithoutManage_areasInput;
}
