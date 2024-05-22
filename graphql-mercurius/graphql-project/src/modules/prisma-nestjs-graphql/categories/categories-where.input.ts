import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { Product_categoriesListRelationFilter } from '../prisma/product-categories-list-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class categoriesWhereInput {

    @Field(() => [categoriesWhereInput], {nullable:true})
    AND?: Array<categoriesWhereInput>;

    @Field(() => [categoriesWhereInput], {nullable:true})
    OR?: Array<categoriesWhereInput>;

    @Field(() => [categoriesWhereInput], {nullable:true})
    NOT?: Array<categoriesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;

    @Field(() => Product_categoriesListRelationFilter, {nullable:true})
    @Type(() => Product_categoriesListRelationFilter)
    product_categories?: Product_categoriesListRelationFilter;
}
