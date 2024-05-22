import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutCartsInput } from './users-create-without-carts.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutCartsInput } from './users-create-or-connect-without-carts.input';
import { usersUpsertWithoutCartsInput } from './users-upsert-without-carts.input';
import { usersWhereInput } from './users-where.input';
import { Prisma } from '@prisma/client';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateToOneWithWhereWithoutCartsInput } from './users-update-to-one-with-where-without-carts.input';

@InputType()
export class usersUpdateOneWithoutCartsNestedInput {

    @Field(() => usersCreateWithoutCartsInput, {nullable:true})
    @Type(() => usersCreateWithoutCartsInput)
    create?: usersCreateWithoutCartsInput;

    @Field(() => usersCreateOrConnectWithoutCartsInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutCartsInput)
    connectOrCreate?: usersCreateOrConnectWithoutCartsInput;

    @Field(() => usersUpsertWithoutCartsInput, {nullable:true})
    @Type(() => usersUpsertWithoutCartsInput)
    upsert?: usersUpsertWithoutCartsInput;

    @Field(() => usersWhereInput, {nullable:true})
    @Type(() => usersWhereInput)
    disconnect?: usersWhereInput;

    @Field(() => usersWhereInput, {nullable:true})
    @Type(() => usersWhereInput)
    delete?: usersWhereInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: Prisma.AtLeast<usersWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => usersUpdateToOneWithWhereWithoutCartsInput, {nullable:true})
    @Type(() => usersUpdateToOneWithWhereWithoutCartsInput)
    update?: usersUpdateToOneWithWhereWithoutCartsInput;
}
