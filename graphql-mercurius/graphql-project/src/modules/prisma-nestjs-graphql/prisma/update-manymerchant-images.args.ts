import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { merchant_imagesUpdateManyMutationInput } from '../merchant-images/merchant-images-update-many-mutation.input';
import { Type } from 'class-transformer';
import { merchant_imagesWhereInput } from '../merchant-images/merchant-images-where.input';

@ArgsType()
export class UpdateManymerchantImagesArgs {

    @Field(() => merchant_imagesUpdateManyMutationInput, {nullable:false})
    @Type(() => merchant_imagesUpdateManyMutationInput)
    data!: merchant_imagesUpdateManyMutationInput;

    @Field(() => merchant_imagesWhereInput, {nullable:true})
    @Type(() => merchant_imagesWhereInput)
    where?: merchant_imagesWhereInput;
}
