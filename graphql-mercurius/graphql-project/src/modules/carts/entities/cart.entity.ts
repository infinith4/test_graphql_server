import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { cart_items } from '../../cart-items/entities/cart-item.entity';
import { users } from '../../users/entities/user.entity';
import { CartsCount } from './carts-count.output';

@ObjectType()
export class carts {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    user_id!: number | null;

    @Field(() => Date, {nullable:true})
    created_at!: Date | null;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;

    @Field(() => [cart_items], {nullable:true})
    cart_items?: Array<cart_items>;

    @Field(() => users, {nullable:true})
    users?: users | null;

    @Field(() => CartsCount, {nullable:false})
    _count?: CartsCount;
}
