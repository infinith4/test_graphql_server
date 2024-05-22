import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { merchantsCreateWithoutMerchant_imagesInput } from './merchants-create-without-merchant-images.input';
import { Type } from 'class-transformer';
import { merchantsCreateOrConnectWithoutMerchant_imagesInput } from './merchants-create-or-connect-without-merchant-images.input';
import { Prisma } from '@prisma/client';
import { merchantsWhereUniqueInput } from './merchants-where-unique.input';

@InputType()
export class merchantsCreateNestedOneWithoutMerchant_imagesInput {

    @Field(() => merchantsCreateWithoutMerchant_imagesInput, {nullable:true})
    @Type(() => merchantsCreateWithoutMerchant_imagesInput)
    create?: merchantsCreateWithoutMerchant_imagesInput;

    @Field(() => merchantsCreateOrConnectWithoutMerchant_imagesInput, {nullable:true})
    @Type(() => merchantsCreateOrConnectWithoutMerchant_imagesInput)
    connectOrCreate?: merchantsCreateOrConnectWithoutMerchant_imagesInput;

    @Field(() => merchantsWhereUniqueInput, {nullable:true})
    @Type(() => merchantsWhereUniqueInput)
    connect?: Prisma.AtLeast<merchantsWhereUniqueInput, 'id'>;
}
