import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cartsCreateManyInput } from './carts-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManycartsArgs {

    @Field(() => [cartsCreateManyInput], {nullable:false})
    @Type(() => cartsCreateManyInput)
    data!: Array<cartsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
