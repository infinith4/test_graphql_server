import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { Manage_areasListRelationFilter } from '../prisma/manage-areas-list-relation-filter.input';

@InputType()
export class areasWhereInput {

    @Field(() => [areasWhereInput], {nullable:true})
    AND?: Array<areasWhereInput>;

    @Field(() => [areasWhereInput], {nullable:true})
    OR?: Array<areasWhereInput>;

    @Field(() => [areasWhereInput], {nullable:true})
    NOT?: Array<areasWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    employee_id?: IntNullableFilter;

    @Field(() => Manage_areasListRelationFilter, {nullable:true})
    manage_areas?: Manage_areasListRelationFilter;
}
