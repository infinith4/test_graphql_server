import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrdersInput } from './users-create-without-orders.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrdersInput } from './users-create-or-connect-without-orders.input';
import { Prisma } from '@prisma/client';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutOrdersInput {

    @Field(() => usersCreateWithoutOrdersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrdersInput)
    create?: usersCreateWithoutOrdersInput;

    @Field(() => usersCreateOrConnectWithoutOrdersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrdersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: Prisma.AtLeast<usersWhereUniqueInput, 'id' | 'username' | 'email'>;
}
