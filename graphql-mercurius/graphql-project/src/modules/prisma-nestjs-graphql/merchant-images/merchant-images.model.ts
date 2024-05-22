import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { merchants } from '../merchants/merchants.model';

@ObjectType()
export class merchant_images {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    url!: string | null;

    @Field(() => Int, {nullable:false})
    merchant_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;

    @Field(() => merchants, {nullable:false})
    merchants?: merchants;
}
