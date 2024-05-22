import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productsCreateInput } from './products-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneproductsArgs {

    @Field(() => productsCreateInput, {nullable:false})
    @Type(() => productsCreateInput)
    data!: productsCreateInput;
}
