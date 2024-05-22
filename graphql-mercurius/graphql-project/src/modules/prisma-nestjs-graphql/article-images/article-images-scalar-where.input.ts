import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class article_imagesScalarWhereInput {

    @Field(() => [article_imagesScalarWhereInput], {nullable:true})
    AND?: Array<article_imagesScalarWhereInput>;

    @Field(() => [article_imagesScalarWhereInput], {nullable:true})
    OR?: Array<article_imagesScalarWhereInput>;

    @Field(() => [article_imagesScalarWhereInput], {nullable:true})
    NOT?: Array<article_imagesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    url?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    article_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;
}
