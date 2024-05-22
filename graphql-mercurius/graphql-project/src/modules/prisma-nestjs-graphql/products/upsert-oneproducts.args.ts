import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { productsWhereUniqueInput } from './products-where-unique.input';
import { Type } from 'class-transformer';
import { productsCreateInput } from './products-create.input';
import { productsUpdateInput } from './products-update.input';

@ArgsType()
export class UpsertOneproductsArgs {

    @Field(() => productsWhereUniqueInput, {nullable:false})
    @Type(() => productsWhereUniqueInput)
    where!: Prisma.AtLeast<productsWhereUniqueInput, 'id'>;

    @Field(() => productsCreateInput, {nullable:false})
    @Type(() => productsCreateInput)
    create!: productsCreateInput;

    @Field(() => productsUpdateInput, {nullable:false})
    @Type(() => productsUpdateInput)
    update!: productsUpdateInput;
}
