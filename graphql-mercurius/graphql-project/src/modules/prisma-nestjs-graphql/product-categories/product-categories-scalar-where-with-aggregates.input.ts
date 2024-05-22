import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class product_categoriesScalarWhereWithAggregatesInput {

    @Field(() => [product_categoriesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<product_categoriesScalarWhereWithAggregatesInput>;

    @Field(() => [product_categoriesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<product_categoriesScalarWhereWithAggregatesInput>;

    @Field(() => [product_categoriesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<product_categoriesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    product_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    category_id?: IntWithAggregatesFilter;
}
