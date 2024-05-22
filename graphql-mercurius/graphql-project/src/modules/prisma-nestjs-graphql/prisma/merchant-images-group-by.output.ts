import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Merchant_imagesCountAggregate } from './merchant-images-count-aggregate.output';
import { Merchant_imagesAvgAggregate } from './merchant-images-avg-aggregate.output';
import { Merchant_imagesSumAggregate } from './merchant-images-sum-aggregate.output';
import { Merchant_imagesMinAggregate } from './merchant-images-min-aggregate.output';
import { Merchant_imagesMaxAggregate } from './merchant-images-max-aggregate.output';

@ObjectType()
export class Merchant_imagesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => Int, {nullable:false})
    merchant_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Merchant_imagesCountAggregate, {nullable:true})
    _count?: Merchant_imagesCountAggregate;

    @Field(() => Merchant_imagesAvgAggregate, {nullable:true})
    _avg?: Merchant_imagesAvgAggregate;

    @Field(() => Merchant_imagesSumAggregate, {nullable:true})
    _sum?: Merchant_imagesSumAggregate;

    @Field(() => Merchant_imagesMinAggregate, {nullable:true})
    _min?: Merchant_imagesMinAggregate;

    @Field(() => Merchant_imagesMaxAggregate, {nullable:true})
    _max?: Merchant_imagesMaxAggregate;
}
