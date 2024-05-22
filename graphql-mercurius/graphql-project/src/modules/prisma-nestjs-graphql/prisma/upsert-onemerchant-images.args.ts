import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { merchant_imagesWhereUniqueInput } from '../merchant-images/merchant-images-where-unique.input';
import { Type } from 'class-transformer';
import { merchant_imagesCreateInput } from '../merchant-images/merchant-images-create.input';
import { merchant_imagesUpdateInput } from '../merchant-images/merchant-images-update.input';

@ArgsType()
export class UpsertOnemerchantImagesArgs {

    @Field(() => merchant_imagesWhereUniqueInput, {nullable:false})
    @Type(() => merchant_imagesWhereUniqueInput)
    where!: merchant_imagesWhereUniqueInput;

    @Field(() => merchant_imagesCreateInput, {nullable:false})
    @Type(() => merchant_imagesCreateInput)
    create!: merchant_imagesCreateInput;

    @Field(() => merchant_imagesUpdateInput, {nullable:false})
    @Type(() => merchant_imagesUpdateInput)
    update!: merchant_imagesUpdateInput;
}
