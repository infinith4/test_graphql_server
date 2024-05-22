import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cartsWhereInput } from '../carts/carts-where.input';

@InputType()
export class CartsListRelationFilter {

    @Field(() => cartsWhereInput, {nullable:true})
    every?: cartsWhereInput;

    @Field(() => cartsWhereInput, {nullable:true})
    some?: cartsWhereInput;

    @Field(() => cartsWhereInput, {nullable:true})
    none?: cartsWhereInput;
}
