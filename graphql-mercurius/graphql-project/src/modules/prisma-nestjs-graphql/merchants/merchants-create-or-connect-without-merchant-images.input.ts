import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { merchantsWhereUniqueInput } from './merchants-where-unique.input';
import { Type } from 'class-transformer';
import { merchantsCreateWithoutMerchant_imagesInput } from './merchants-create-without-merchant-images.input';

@InputType()
export class merchantsCreateOrConnectWithoutMerchant_imagesInput {

    @Field(() => merchantsWhereUniqueInput, {nullable:false})
    @Type(() => merchantsWhereUniqueInput)
    where!: Prisma.AtLeast<merchantsWhereUniqueInput, 'id'>;

    @Field(() => merchantsCreateWithoutMerchant_imagesInput, {nullable:false})
    @Type(() => merchantsCreateWithoutMerchant_imagesInput)
    create!: merchantsCreateWithoutMerchant_imagesInput;
}
