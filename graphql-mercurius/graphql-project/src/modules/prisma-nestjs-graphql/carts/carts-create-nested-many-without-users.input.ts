import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cartsCreateWithoutUsersInput } from './carts-create-without-users.input';
import { Type } from 'class-transformer';
import { cartsCreateOrConnectWithoutUsersInput } from './carts-create-or-connect-without-users.input';
import { cartsCreateManyUsersInputEnvelope } from './carts-create-many-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { cartsWhereUniqueInput } from './carts-where-unique.input';

@InputType()
export class cartsCreateNestedManyWithoutUsersInput {

    @Field(() => [cartsCreateWithoutUsersInput], {nullable:true})
    @Type(() => cartsCreateWithoutUsersInput)
    create?: Array<cartsCreateWithoutUsersInput>;

    @Field(() => [cartsCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => cartsCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<cartsCreateOrConnectWithoutUsersInput>;

    @Field(() => cartsCreateManyUsersInputEnvelope, {nullable:true})
    @Type(() => cartsCreateManyUsersInputEnvelope)
    createMany?: cartsCreateManyUsersInputEnvelope;

    @Field(() => [cartsWhereUniqueInput], {nullable:true})
    @Type(() => cartsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<cartsWhereUniqueInput, 'id'>>;
}
