import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cartsWhereInput } from './carts-where.input';
import { Type } from 'class-transformer';
import { cartsOrderByWithRelationInput } from './carts-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { cartsWhereUniqueInput } from './carts-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CartsScalarFieldEnum } from '../prisma/carts-scalar-field.enum';

@ArgsType()
export class FindFirstcartsOrThrowArgs {

    @Field(() => cartsWhereInput, {nullable:true})
    @Type(() => cartsWhereInput)
    where?: cartsWhereInput;

    @Field(() => [cartsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<cartsOrderByWithRelationInput>;

    @Field(() => cartsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<cartsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CartsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CartsScalarFieldEnum>;
}
