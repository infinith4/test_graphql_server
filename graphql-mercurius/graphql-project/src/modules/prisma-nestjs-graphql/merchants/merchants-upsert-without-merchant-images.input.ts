import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { merchantsUpdateWithoutMerchant_imagesInput } from './merchants-update-without-merchant-images.input';
import { Type } from 'class-transformer';
import { merchantsCreateWithoutMerchant_imagesInput } from './merchants-create-without-merchant-images.input';
import { merchantsWhereInput } from './merchants-where.input';

@InputType()
export class merchantsUpsertWithoutMerchant_imagesInput {

    @Field(() => merchantsUpdateWithoutMerchant_imagesInput, {nullable:false})
    @Type(() => merchantsUpdateWithoutMerchant_imagesInput)
    update!: merchantsUpdateWithoutMerchant_imagesInput;

    @Field(() => merchantsCreateWithoutMerchant_imagesInput, {nullable:false})
    @Type(() => merchantsCreateWithoutMerchant_imagesInput)
    create!: merchantsCreateWithoutMerchant_imagesInput;

    @Field(() => merchantsWhereInput, {nullable:true})
    @Type(() => merchantsWhereInput)
    where?: merchantsWhereInput;
}
