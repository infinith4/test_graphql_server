import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { merchant_imagesWhereInput } from '../merchant-images/merchant-images-where.input';
import { Type } from 'class-transformer';
import { merchant_imagesOrderByWithRelationInput } from '../merchant-images/merchant-images-order-by-with-relation.input';
import { merchant_imagesWhereUniqueInput } from '../merchant-images/merchant-images-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Merchant_imagesScalarFieldEnum } from './merchant-images-scalar-field.enum';

@ArgsType()
export class FindFirstmerchantImagesArgs {

    @Field(() => merchant_imagesWhereInput, {nullable:true})
    @Type(() => merchant_imagesWhereInput)
    where?: merchant_imagesWhereInput;

    @Field(() => [merchant_imagesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<merchant_imagesOrderByWithRelationInput>;

    @Field(() => merchant_imagesWhereUniqueInput, {nullable:true})
    cursor?: merchant_imagesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Merchant_imagesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Merchant_imagesScalarFieldEnum>;
}
