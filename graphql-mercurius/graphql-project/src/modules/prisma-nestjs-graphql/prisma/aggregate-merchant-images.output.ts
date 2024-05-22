import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Merchant_imagesCountAggregate } from './merchant-images-count-aggregate.output';
import { Merchant_imagesAvgAggregate } from './merchant-images-avg-aggregate.output';
import { Merchant_imagesSumAggregate } from './merchant-images-sum-aggregate.output';
import { Merchant_imagesMinAggregate } from './merchant-images-min-aggregate.output';
import { Merchant_imagesMaxAggregate } from './merchant-images-max-aggregate.output';

@ObjectType()
export class AggregateMerchant_images {

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
