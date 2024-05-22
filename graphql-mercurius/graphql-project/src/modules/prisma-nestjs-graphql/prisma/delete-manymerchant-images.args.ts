import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { merchant_imagesWhereInput } from '../merchant-images/merchant-images-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymerchantImagesArgs {

    @Field(() => merchant_imagesWhereInput, {nullable:true})
    @Type(() => merchant_imagesWhereInput)
    where?: merchant_imagesWhereInput;
}
