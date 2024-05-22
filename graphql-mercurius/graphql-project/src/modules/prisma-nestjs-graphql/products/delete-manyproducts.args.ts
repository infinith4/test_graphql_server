import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productsWhereInput } from './products-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyproductsArgs {

    @Field(() => productsWhereInput, {nullable:true})
    @Type(() => productsWhereInput)
    where?: productsWhereInput;
}
