import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { merchant_imagesCreateManyInput } from '../merchant-images/merchant-images-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManymerchantImagesArgs {

    @Field(() => [merchant_imagesCreateManyInput], {nullable:false})
    @Type(() => merchant_imagesCreateManyInput)
    data!: Array<merchant_imagesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
