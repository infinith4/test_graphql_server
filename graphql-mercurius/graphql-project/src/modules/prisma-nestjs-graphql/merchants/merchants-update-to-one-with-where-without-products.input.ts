import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { merchantsWhereInput } from './merchants-where.input';
import { Type } from 'class-transformer';
import { merchantsUpdateWithoutProductsInput } from './merchants-update-without-products.input';

@InputType()
export class merchantsUpdateToOneWithWhereWithoutProductsInput {

    @Field(() => merchantsWhereInput, {nullable:true})
    @Type(() => merchantsWhereInput)
    where?: merchantsWhereInput;

    @Field(() => merchantsUpdateWithoutProductsInput, {nullable:false})
    @Type(() => merchantsUpdateWithoutProductsInput)
    data!: merchantsUpdateWithoutProductsInput;
}
