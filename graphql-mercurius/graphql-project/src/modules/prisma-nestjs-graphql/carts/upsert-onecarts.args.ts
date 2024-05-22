import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { cartsWhereUniqueInput } from './carts-where-unique.input';
import { Type } from 'class-transformer';
import { cartsCreateInput } from './carts-create.input';
import { cartsUpdateInput } from './carts-update.input';

@ArgsType()
export class UpsertOnecartsArgs {

    @Field(() => cartsWhereUniqueInput, {nullable:false})
    @Type(() => cartsWhereUniqueInput)
    where!: Prisma.AtLeast<cartsWhereUniqueInput, 'id'>;

    @Field(() => cartsCreateInput, {nullable:false})
    @Type(() => cartsCreateInput)
    create!: cartsCreateInput;

    @Field(() => cartsUpdateInput, {nullable:false})
    @Type(() => cartsUpdateInput)
    update!: cartsUpdateInput;
}
