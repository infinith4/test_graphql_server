import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class categoriesScalarWhereInput {

    @Field(() => [categoriesScalarWhereInput], {nullable:true})
    AND?: Array<categoriesScalarWhereInput>;

    @Field(() => [categoriesScalarWhereInput], {nullable:true})
    OR?: Array<categoriesScalarWhereInput>;

    @Field(() => [categoriesScalarWhereInput], {nullable:true})
    NOT?: Array<categoriesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    parent_id?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;
}
