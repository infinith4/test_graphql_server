import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cartsUpdateManyMutationInput } from './carts-update-many-mutation.input';
import { Type } from 'class-transformer';
import { cartsWhereInput } from './carts-where.input';

@ArgsType()
export class UpdateManycartsArgs {

    @Field(() => cartsUpdateManyMutationInput, {nullable:false})
    @Type(() => cartsUpdateManyMutationInput)
    data!: cartsUpdateManyMutationInput;

    @Field(() => cartsWhereInput, {nullable:true})
    @Type(() => cartsWhereInput)
    where?: cartsWhereInput;
}
