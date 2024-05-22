import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cartsWhereInput } from '../carts/carts-where.input';

@InputType()
export class CartsNullableRelationFilter {

    @Field(() => cartsWhereInput, {nullable:true})
    is?: cartsWhereInput;

    @Field(() => cartsWhereInput, {nullable:true})
    isNot?: cartsWhereInput;
}
