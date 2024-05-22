import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { merchant_imagesCreateInput } from '../merchant-images/merchant-images-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemerchantImagesArgs {

    @Field(() => merchant_imagesCreateInput, {nullable:false})
    @Type(() => merchant_imagesCreateInput)
    data!: merchant_imagesCreateInput;
}
