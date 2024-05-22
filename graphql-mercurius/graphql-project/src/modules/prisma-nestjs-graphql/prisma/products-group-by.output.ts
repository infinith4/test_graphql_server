import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { products_status } from './products-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { ProductsCountAggregate } from './products-count-aggregate.output';
import { ProductsAvgAggregate } from './products-avg-aggregate.output';
import { ProductsSumAggregate } from './products-sum-aggregate.output';
import { ProductsMinAggregate } from './products-min-aggregate.output';
import { ProductsMaxAggregate } from './products-max-aggregate.output';

@ObjectType()
export class ProductsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => products_status, {nullable:true})
    status?: keyof typeof products_status;

    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;

    @Field(() => Int, {nullable:false})
    stock!: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ProductsCountAggregate, {nullable:true})
    _count?: ProductsCountAggregate;

    @Field(() => ProductsAvgAggregate, {nullable:true})
    _avg?: ProductsAvgAggregate;

    @Field(() => ProductsSumAggregate, {nullable:true})
    _sum?: ProductsSumAggregate;

    @Field(() => ProductsMinAggregate, {nullable:true})
    _min?: ProductsMinAggregate;

    @Field(() => ProductsMaxAggregate, {nullable:true})
    _max?: ProductsMaxAggregate;
}
