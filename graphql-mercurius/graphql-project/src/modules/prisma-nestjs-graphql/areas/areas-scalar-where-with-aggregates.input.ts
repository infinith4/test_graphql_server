import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class areasScalarWhereWithAggregatesInput {

    @Field(() => [areasScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<areasScalarWhereWithAggregatesInput>;

    @Field(() => [areasScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<areasScalarWhereWithAggregatesInput>;

    @Field(() => [areasScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<areasScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    employee_id?: IntNullableWithAggregatesFilter;
}
