import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { merchant_imagesScalarWhereInput } from './merchant-images-scalar-where.input';
import { Type } from 'class-transformer';
import { merchant_imagesUpdateManyMutationInput } from './merchant-images-update-many-mutation.input';

@InputType()
export class merchant_imagesUpdateManyWithWhereWithoutMerchantsInput {

    @Field(() => merchant_imagesScalarWhereInput, {nullable:false})
    @Type(() => merchant_imagesScalarWhereInput)
    where!: merchant_imagesScalarWhereInput;

    @Field(() => merchant_imagesUpdateManyMutationInput, {nullable:false})
    @Type(() => merchant_imagesUpdateManyMutationInput)
    data!: merchant_imagesUpdateManyMutationInput;
}
