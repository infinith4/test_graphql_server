import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Enumarticles_statusNullableFilter } from '../prisma/enumarticles-status-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class articlesScalarWhereInput {

    @Field(() => [articlesScalarWhereInput], {nullable:true})
    AND?: Array<articlesScalarWhereInput>;

    @Field(() => [articlesScalarWhereInput], {nullable:true})
    OR?: Array<articlesScalarWhereInput>;

    @Field(() => [articlesScalarWhereInput], {nullable:true})
    NOT?: Array<articlesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => Enumarticles_statusNullableFilter, {nullable:true})
    status?: Enumarticles_statusNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    user_id?: IntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;
}
