import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productsWhereInput } from './products-where.input';
import { Type } from 'class-transformer';
import { productsOrderByWithRelationInput } from './products-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { productsWhereUniqueInput } from './products-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductsScalarFieldEnum } from '../prisma/products-scalar-field.enum';

@ArgsType()
export class FindFirstproductsArgs {

    @Field(() => productsWhereInput, {nullable:true})
    @Type(() => productsWhereInput)
    where?: productsWhereInput;

    @Field(() => [productsOrderByWithRelationInput], {nullable:true})
    @Type(() => productsOrderByWithRelationInput)
    orderBy?: Array<productsOrderByWithRelationInput>;

    @Field(() => productsWhereUniqueInput, {nullable:true})
    @Type(() => productsWhereUniqueInput)
    cursor?: Prisma.AtLeast<productsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductsScalarFieldEnum>;
}
