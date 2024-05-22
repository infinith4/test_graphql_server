import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { MerchantsRelationFilter } from '../prisma/merchants-relation-filter.input';

@InputType()
export class merchant_imagesWhereInput {

    @Field(() => [merchant_imagesWhereInput], {nullable:true})
    AND?: Array<merchant_imagesWhereInput>;

    @Field(() => [merchant_imagesWhereInput], {nullable:true})
    OR?: Array<merchant_imagesWhereInput>;

    @Field(() => [merchant_imagesWhereInput], {nullable:true})
    NOT?: Array<merchant_imagesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    url?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    merchant_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updated_at?: DateTimeNullableFilter;

    @Field(() => MerchantsRelationFilter, {nullable:true})
    merchants?: MerchantsRelationFilter;
}
