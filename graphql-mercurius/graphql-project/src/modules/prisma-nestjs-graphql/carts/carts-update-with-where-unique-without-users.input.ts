import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { cartsWhereUniqueInput } from './carts-where-unique.input';
import { Type } from 'class-transformer';
import { cartsUpdateWithoutUsersInput } from './carts-update-without-users.input';

@InputType()
export class cartsUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => cartsWhereUniqueInput, {nullable:false})
    @Type(() => cartsWhereUniqueInput)
    where!: Prisma.AtLeast<cartsWhereUniqueInput, 'id'>;

    @Field(() => cartsUpdateWithoutUsersInput, {nullable:false})
    @Type(() => cartsUpdateWithoutUsersInput)
    data!: cartsUpdateWithoutUsersInput;
}
