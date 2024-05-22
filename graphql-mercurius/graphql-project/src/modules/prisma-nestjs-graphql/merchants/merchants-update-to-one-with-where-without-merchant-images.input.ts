import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { merchantsWhereInput } from './merchants-where.input';
import { Type } from 'class-transformer';
import { merchantsUpdateWithoutMerchant_imagesInput } from './merchants-update-without-merchant-images.input';

@InputType()
export class merchantsUpdateToOneWithWhereWithoutMerchant_imagesInput {

    @Field(() => merchantsWhereInput, {nullable:true})
    @Type(() => merchantsWhereInput)
    where?: merchantsWhereInput;

    @Field(() => merchantsUpdateWithoutMerchant_imagesInput, {nullable:false})
    @Type(() => merchantsUpdateWithoutMerchant_imagesInput)
    data!: merchantsUpdateWithoutMerchant_imagesInput;
}
