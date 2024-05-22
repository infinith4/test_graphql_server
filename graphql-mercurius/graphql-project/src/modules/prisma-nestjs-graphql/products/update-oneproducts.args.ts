import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productsUpdateInput } from './products-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { productsWhereUniqueInput } from './products-where-unique.input';

@ArgsType()
export class UpdateOneproductsArgs {

    @Field(() => productsUpdateInput, {nullable:false})
    @Type(() => productsUpdateInput)
    data!: productsUpdateInput;

    @Field(() => productsWhereUniqueInput, {nullable:false})
    @Type(() => productsWhereUniqueInput)
    where!: Prisma.AtLeast<productsWhereUniqueInput, 'id'>;
}
