import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CartsCount {

    @Field(() => Int, {nullable:false})
    cart_items!: number;
}
