import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cartsCreateWithoutUsersInput } from './carts-create-without-users.input';
import { Type } from 'class-transformer';
import { cartsCreateOrConnectWithoutUsersInput } from './carts-create-or-connect-without-users.input';
import { cartsUpsertWithWhereUniqueWithoutUsersInput } from './carts-upsert-with-where-unique-without-users.input';
import { cartsCreateManyUsersInputEnvelope } from './carts-create-many-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { cartsWhereUniqueInput } from './carts-where-unique.input';
import { cartsUpdateWithWhereUniqueWithoutUsersInput } from './carts-update-with-where-unique-without-users.input';
import { cartsUpdateManyWithWhereWithoutUsersInput } from './carts-update-many-with-where-without-users.input';
import { cartsScalarWhereInput } from './carts-scalar-where.input';

@InputType()
export class cartsUpdateManyWithoutUsersNestedInput {

    @Field(() => [cartsCreateWithoutUsersInput], {nullable:true})
    @Type(() => cartsCreateWithoutUsersInput)
    create?: Array<cartsCreateWithoutUsersInput>;

    @Field(() => [cartsCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => cartsCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<cartsCreateOrConnectWithoutUsersInput>;

    @Field(() => [cartsUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => cartsUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<cartsUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => cartsCreateManyUsersInputEnvelope, {nullable:true})
    @Type(() => cartsCreateManyUsersInputEnvelope)
    createMany?: cartsCreateManyUsersInputEnvelope;

    @Field(() => [cartsWhereUniqueInput], {nullable:true})
    @Type(() => cartsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<cartsWhereUniqueInput, 'id'>>;

    @Field(() => [cartsWhereUniqueInput], {nullable:true})
    @Type(() => cartsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<cartsWhereUniqueInput, 'id'>>;

    @Field(() => [cartsWhereUniqueInput], {nullable:true})
    @Type(() => cartsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<cartsWhereUniqueInput, 'id'>>;

    @Field(() => [cartsWhereUniqueInput], {nullable:true})
    @Type(() => cartsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<cartsWhereUniqueInput, 'id'>>;

    @Field(() => [cartsUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => cartsUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<cartsUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [cartsUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => cartsUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<cartsUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [cartsScalarWhereInput], {nullable:true})
    @Type(() => cartsScalarWhereInput)
    deleteMany?: Array<cartsScalarWhereInput>;
}
