import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { merchant_imagesCreateManyMerchantsInput } from './merchant-images-create-many-merchants.input';
import { Type } from 'class-transformer';

@InputType()
export class merchant_imagesCreateManyMerchantsInputEnvelope {

    @Field(() => [merchant_imagesCreateManyMerchantsInput], {nullable:false})
    @Type(() => merchant_imagesCreateManyMerchantsInput)
    data!: Array<merchant_imagesCreateManyMerchantsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
