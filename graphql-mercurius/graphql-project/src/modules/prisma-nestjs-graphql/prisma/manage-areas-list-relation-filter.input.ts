import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manage_areasWhereInput } from '../manage-areas/manage-areas-where.input';

@InputType()
export class Manage_areasListRelationFilter {

    @Field(() => manage_areasWhereInput, {nullable:true})
    every?: manage_areasWhereInput;

    @Field(() => manage_areasWhereInput, {nullable:true})
    some?: manage_areasWhereInput;

    @Field(() => manage_areasWhereInput, {nullable:true})
    none?: manage_areasWhereInput;
}
