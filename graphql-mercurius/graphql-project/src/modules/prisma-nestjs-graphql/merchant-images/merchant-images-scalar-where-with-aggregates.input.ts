import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class merchant_imagesScalarWhereWithAggregatesInput {

    @Field(() => [merchant_imagesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<merchant_imagesScalarWhereWithAggregatesInput>;

    @Field(() => [merchant_imagesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<merchant_imagesScalarWhereWithAggregatesInput>;

    @Field(() => [merchant_imagesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<merchant_imagesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    url?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    merchant_id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeNullableWithAggregatesFilter;
}
