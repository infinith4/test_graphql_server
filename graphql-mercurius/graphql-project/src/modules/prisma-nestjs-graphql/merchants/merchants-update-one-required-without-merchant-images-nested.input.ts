import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { merchantsCreateWithoutMerchant_imagesInput } from './merchants-create-without-merchant-images.input';
import { Type } from 'class-transformer';
import { merchantsCreateOrConnectWithoutMerchant_imagesInput } from './merchants-create-or-connect-without-merchant-images.input';
import { merchantsUpsertWithoutMerchant_imagesInput } from './merchants-upsert-without-merchant-images.input';
import { Prisma } from '@prisma/client';
import { merchantsWhereUniqueInput } from './merchants-where-unique.input';
import { merchantsUpdateToOneWithWhereWithoutMerchant_imagesInput } from './merchants-update-to-one-with-where-without-merchant-images.input';

@InputType()
export class merchantsUpdateOneRequiredWithoutMerchant_imagesNestedInput {

    @Field(() => merchantsCreateWithoutMerchant_imagesInput, {nullable:true})
    @Type(() => merchantsCreateWithoutMerchant_imagesInput)
    create?: merchantsCreateWithoutMerchant_imagesInput;

    @Field(() => merchantsCreateOrConnectWithoutMerchant_imagesInput, {nullable:true})
    @Type(() => merchantsCreateOrConnectWithoutMerchant_imagesInput)
    connectOrCreate?: merchantsCreateOrConnectWithoutMerchant_imagesInput;

    @Field(() => merchantsUpsertWithoutMerchant_imagesInput, {nullable:true})
    @Type(() => merchantsUpsertWithoutMerchant_imagesInput)
    upsert?: merchantsUpsertWithoutMerchant_imagesInput;

    @Field(() => merchantsWhereUniqueInput, {nullable:true})
    @Type(() => merchantsWhereUniqueInput)
    connect?: Prisma.AtLeast<merchantsWhereUniqueInput, 'id'>;

    @Field(() => merchantsUpdateToOneWithWhereWithoutMerchant_imagesInput, {nullable:true})
    @Type(() => merchantsUpdateToOneWithWhereWithoutMerchant_imagesInput)
    update?: merchantsUpdateToOneWithWhereWithoutMerchant_imagesInput;
}
