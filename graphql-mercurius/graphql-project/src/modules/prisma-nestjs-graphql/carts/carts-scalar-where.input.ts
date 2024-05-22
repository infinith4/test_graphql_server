import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class cartsScalarWhereInput {

    @Field(() => [cartsScalarWhereInput], {nullable:true})
    AND?: Array<cartsScalarWhereInput>;

    @Field(() => [cartsScalarWhereInput], {nullable:true})
    OR?: Array<cartsScalarWhereInput>;

    @Field(() => [cartsScalarWhereInput], {nullable:true})
    NOT?: Array<cartsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    user_id?: IntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;
}
