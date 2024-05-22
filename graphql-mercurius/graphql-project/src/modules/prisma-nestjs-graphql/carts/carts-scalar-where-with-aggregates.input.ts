import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class cartsScalarWhereWithAggregatesInput {

    @Field(() => [cartsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<cartsScalarWhereWithAggregatesInput>;

    @Field(() => [cartsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<cartsScalarWhereWithAggregatesInput>;

    @Field(() => [cartsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<cartsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    user_id?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeNullableWithAggregatesFilter;
}
