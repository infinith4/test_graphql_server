import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { merchantsCreateWithoutProductsInput } from './merchants-create-without-products.input';
import { Type } from 'class-transformer';
import { merchantsCreateOrConnectWithoutProductsInput } from './merchants-create-or-connect-without-products.input';
import { merchantsUpsertWithoutProductsInput } from './merchants-upsert-without-products.input';
import { Prisma } from '@prisma/client';
import { merchantsWhereUniqueInput } from './merchants-where-unique.input';
import { merchantsUpdateToOneWithWhereWithoutProductsInput } from './merchants-update-to-one-with-where-without-products.input';

@InputType()
export class merchantsUpdateOneRequiredWithoutProductsNestedInput {

    @Field(() => merchantsCreateWithoutProductsInput, {nullable:true})
    @Type(() => merchantsCreateWithoutProductsInput)
    create?: merchantsCreateWithoutProductsInput;

    @Field(() => merchantsCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => merchantsCreateOrConnectWithoutProductsInput)
    connectOrCreate?: merchantsCreateOrConnectWithoutProductsInput;

    @Field(() => merchantsUpsertWithoutProductsInput, {nullable:true})
    @Type(() => merchantsUpsertWithoutProductsInput)
    upsert?: merchantsUpsertWithoutProductsInput;

    @Field(() => merchantsWhereUniqueInput, {nullable:true})
    @Type(() => merchantsWhereUniqueInput)
    connect?: Prisma.AtLeast<merchantsWhereUniqueInput, 'id'>;

    @Field(() => merchantsUpdateToOneWithWhereWithoutProductsInput, {nullable:true})
    @Type(() => merchantsUpdateToOneWithWhereWithoutProductsInput)
    update?: merchantsUpdateToOneWithWhereWithoutProductsInput;
}
