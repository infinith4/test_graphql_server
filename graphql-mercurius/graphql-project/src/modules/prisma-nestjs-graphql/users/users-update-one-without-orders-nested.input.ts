import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrdersInput } from './users-create-without-orders.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrdersInput } from './users-create-or-connect-without-orders.input';
import { usersUpsertWithoutOrdersInput } from './users-upsert-without-orders.input';
import { usersWhereInput } from './users-where.input';
import { Prisma } from '@prisma/client';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateToOneWithWhereWithoutOrdersInput } from './users-update-to-one-with-where-without-orders.input';

@InputType()
export class usersUpdateOneWithoutOrdersNestedInput {

    @Field(() => usersCreateWithoutOrdersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrdersInput)
    create?: usersCreateWithoutOrdersInput;

    @Field(() => usersCreateOrConnectWithoutOrdersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrdersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput;

    @Field(() => usersUpsertWithoutOrdersInput, {nullable:true})
    @Type(() => usersUpsertWithoutOrdersInput)
    upsert?: usersUpsertWithoutOrdersInput;

    @Field(() => usersWhereInput, {nullable:true})
    @Type(() => usersWhereInput)
    disconnect?: usersWhereInput;

    @Field(() => usersWhereInput, {nullable:true})
    @Type(() => usersWhereInput)
    delete?: usersWhereInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: Prisma.AtLeast<usersWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => usersUpdateToOneWithWhereWithoutOrdersInput, {nullable:true})
    @Type(() => usersUpdateToOneWithWhereWithoutOrdersInput)
    update?: usersUpdateToOneWithWhereWithoutOrdersInput;
}
