import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cartsCreateInput } from './carts-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnecartsArgs {

    @Field(() => cartsCreateInput, {nullable:true})
    @Type(() => cartsCreateInput)
    data?: cartsCreateInput;
}
