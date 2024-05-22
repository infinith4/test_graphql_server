import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cartsUpdateInput } from './carts-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { cartsWhereUniqueInput } from './carts-where-unique.input';

@ArgsType()
export class UpdateOnecartsArgs {

    @Field(() => cartsUpdateInput, {nullable:false})
    @Type(() => cartsUpdateInput)
    data!: cartsUpdateInput;

    @Field(() => cartsWhereUniqueInput, {nullable:false})
    @Type(() => cartsWhereUniqueInput)
    where!: Prisma.AtLeast<cartsWhereUniqueInput, 'id'>;
}
