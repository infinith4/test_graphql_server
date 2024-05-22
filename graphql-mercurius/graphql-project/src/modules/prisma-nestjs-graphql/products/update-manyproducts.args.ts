import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productsUpdateManyMutationInput } from './products-update-many-mutation.input';
import { Type } from 'class-transformer';
import { productsWhereInput } from './products-where.input';

@ArgsType()
export class UpdateManyproductsArgs {

    @Field(() => productsUpdateManyMutationInput, {nullable:false})
    @Type(() => productsUpdateManyMutationInput)
    data!: productsUpdateManyMutationInput;

    @Field(() => productsWhereInput, {nullable:true})
    @Type(() => productsWhereInput)
    where?: productsWhereInput;
}
