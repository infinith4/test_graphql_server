import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { merchant_imagesWhereInput } from '../merchant-images/merchant-images-where.input';
import { Type } from 'class-transformer';
import { merchant_imagesOrderByWithAggregationInput } from '../merchant-images/merchant-images-order-by-with-aggregation.input';
import { Merchant_imagesScalarFieldEnum } from './merchant-images-scalar-field.enum';
import { merchant_imagesScalarWhereWithAggregatesInput } from '../merchant-images/merchant-images-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymerchantImagesArgs {

    @Field(() => merchant_imagesWhereInput, {nullable:true})
    @Type(() => merchant_imagesWhereInput)
    where?: merchant_imagesWhereInput;

    @Field(() => [merchant_imagesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<merchant_imagesOrderByWithAggregationInput>;

    @Field(() => [Merchant_imagesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Merchant_imagesScalarFieldEnum>;

    @Field(() => merchant_imagesScalarWhereWithAggregatesInput, {nullable:true})
    having?: merchant_imagesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
