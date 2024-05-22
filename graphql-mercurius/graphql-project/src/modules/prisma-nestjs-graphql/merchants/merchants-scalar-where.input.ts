import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class merchantsScalarWhereInput {

    @Field(() => [merchantsScalarWhereInput], {nullable:true})
    AND?: Array<merchantsScalarWhereInput>;

    @Field(() => [merchantsScalarWhereInput], {nullable:true})
    OR?: Array<merchantsScalarWhereInput>;

    @Field(() => [merchantsScalarWhereInput], {nullable:true})
    NOT?: Array<merchantsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    admin_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    country_code?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;
}
