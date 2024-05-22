import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { cartsWhereUniqueInput } from './carts-where-unique.input';
import { Type } from 'class-transformer';
import { cartsCreateWithoutUsersInput } from './carts-create-without-users.input';

@InputType()
export class cartsCreateOrConnectWithoutUsersInput {

    @Field(() => cartsWhereUniqueInput, {nullable:false})
    @Type(() => cartsWhereUniqueInput)
    where!: Prisma.AtLeast<cartsWhereUniqueInput, 'id'>;

    @Field(() => cartsCreateWithoutUsersInput, {nullable:false})
    @Type(() => cartsCreateWithoutUsersInput)
    create!: cartsCreateWithoutUsersInput;
}
