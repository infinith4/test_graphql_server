import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class manage_areasScalarWhereInput {

    @Field(() => [manage_areasScalarWhereInput], {nullable:true})
    AND?: Array<manage_areasScalarWhereInput>;

    @Field(() => [manage_areasScalarWhereInput], {nullable:true})
    OR?: Array<manage_areasScalarWhereInput>;

    @Field(() => [manage_areasScalarWhereInput], {nullable:true})
    NOT?: Array<manage_areasScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    area_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    employee_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;
}
