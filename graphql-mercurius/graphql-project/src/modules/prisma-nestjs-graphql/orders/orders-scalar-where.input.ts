import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { Enumorders_statusFilter } from '../prisma/enumorders-status-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class ordersScalarWhereInput {

    @Field(() => [ordersScalarWhereInput], {nullable:true})
    @Type(() => ordersScalarWhereInput)
    AND?: Array<ordersScalarWhereInput>;

    @Field(() => [ordersScalarWhereInput], {nullable:true})
    @Type(() => ordersScalarWhereInput)
    OR?: Array<ordersScalarWhereInput>;

    @Field(() => [ordersScalarWhereInput], {nullable:true})
    @Type(() => ordersScalarWhereInput)
    NOT?: Array<ordersScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    user_id?: IntNullableFilter;

    @Field(() => Enumorders_statusFilter, {nullable:true})
    status?: Enumorders_statusFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    total?: DecimalFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;
}
