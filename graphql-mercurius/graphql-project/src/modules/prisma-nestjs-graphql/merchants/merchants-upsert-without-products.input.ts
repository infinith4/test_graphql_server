import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { merchantsUpdateWithoutProductsInput } from './merchants-update-without-products.input';
import { Type } from 'class-transformer';
import { merchantsCreateWithoutProductsInput } from './merchants-create-without-products.input';
import { merchantsWhereInput } from './merchants-where.input';

@InputType()
export class merchantsUpsertWithoutProductsInput {

    @Field(() => merchantsUpdateWithoutProductsInput, {nullable:false})
    @Type(() => merchantsUpdateWithoutProductsInput)
    update!: merchantsUpdateWithoutProductsInput;

    @Field(() => merchantsCreateWithoutProductsInput, {nullable:false})
    @Type(() => merchantsCreateWithoutProductsInput)
    create!: merchantsCreateWithoutProductsInput;

    @Field(() => merchantsWhereInput, {nullable:true})
    @Type(() => merchantsWhereInput)
    where?: merchantsWhereInput;
}
