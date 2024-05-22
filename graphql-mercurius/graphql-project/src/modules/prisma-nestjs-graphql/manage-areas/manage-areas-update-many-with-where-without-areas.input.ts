import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manage_areasScalarWhereInput } from './manage-areas-scalar-where.input';
import { Type } from 'class-transformer';
import { manage_areasUpdateManyMutationInput } from './manage-areas-update-many-mutation.input';

@InputType()
export class manage_areasUpdateManyWithWhereWithoutAreasInput {

    @Field(() => manage_areasScalarWhereInput, {nullable:false})
    @Type(() => manage_areasScalarWhereInput)
    where!: manage_areasScalarWhereInput;

    @Field(() => manage_areasUpdateManyMutationInput, {nullable:false})
    @Type(() => manage_areasUpdateManyMutationInput)
    data!: manage_areasUpdateManyMutationInput;
}
