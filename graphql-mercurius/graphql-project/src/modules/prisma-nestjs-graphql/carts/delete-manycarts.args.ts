import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cartsWhereInput } from './carts-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManycartsArgs {

    @Field(() => cartsWhereInput, {nullable:true})
    @Type(() => cartsWhereInput)
    where?: cartsWhereInput;
}
