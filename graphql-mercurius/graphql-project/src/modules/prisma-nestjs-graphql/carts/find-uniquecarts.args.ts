import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { cartsWhereUniqueInput } from './carts-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquecartsArgs {

    @Field(() => cartsWhereUniqueInput, {nullable:false})
    @Type(() => cartsWhereUniqueInput)
    where!: Prisma.AtLeast<cartsWhereUniqueInput, 'id'>;
}
