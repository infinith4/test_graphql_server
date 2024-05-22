import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { merchant_imagesWhereUniqueInput } from '../merchant-images/merchant-images-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquemerchantImagesOrThrowArgs {

    @Field(() => merchant_imagesWhereUniqueInput, {nullable:false})
    @Type(() => merchant_imagesWhereUniqueInput)
    where!: merchant_imagesWhereUniqueInput;
}
