import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { merchant_imagesUpdateInput } from '../merchant-images/merchant-images-update.input';
import { Type } from 'class-transformer';
import { merchant_imagesWhereUniqueInput } from '../merchant-images/merchant-images-where-unique.input';

@ArgsType()
export class UpdateOnemerchantImagesArgs {

    @Field(() => merchant_imagesUpdateInput, {nullable:false})
    @Type(() => merchant_imagesUpdateInput)
    data!: merchant_imagesUpdateInput;

    @Field(() => merchant_imagesWhereUniqueInput, {nullable:false})
    @Type(() => merchant_imagesWhereUniqueInput)
    where!: merchant_imagesWhereUniqueInput;
}
