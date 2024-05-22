import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class ProductsSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    price?: Decimal;

    @Field(() => Int, {nullable:true})
    stock?: number;
}
