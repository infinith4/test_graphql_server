import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { merchantsCreateWithoutUsersInput } from './merchants-create-without-users.input';
import { Type } from 'class-transformer';
import { merchantsCreateOrConnectWithoutUsersInput } from './merchants-create-or-connect-without-users.input';
import { merchantsUpsertWithWhereUniqueWithoutUsersInput } from './merchants-upsert-with-where-unique-without-users.input';
import { merchantsCreateManyUsersInputEnvelope } from './merchants-create-many-users-input-envelope.input';
import { Prisma } from '@prisma/client';
import { merchantsWhereUniqueInput } from './merchants-where-unique.input';
import { merchantsUpdateWithWhereUniqueWithoutUsersInput } from './merchants-update-with-where-unique-without-users.input';
import { merchantsUpdateManyWithWhereWithoutUsersInput } from './merchants-update-many-with-where-without-users.input';
import { merchantsScalarWhereInput } from './merchants-scalar-where.input';

@InputType()
export class merchantsUncheckedUpdateManyWithoutUsersNestedInput {

    @Field(() => [merchantsCreateWithoutUsersInput], {nullable:true})
    @Type(() => merchantsCreateWithoutUsersInput)
    create?: Array<merchantsCreateWithoutUsersInput>;

    @Field(() => [merchantsCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => merchantsCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<merchantsCreateOrConnectWithoutUsersInput>;

    @Field(() => [merchantsUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => merchantsUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<merchantsUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => merchantsCreateManyUsersInputEnvelope, {nullable:true})
    @Type(() => merchantsCreateManyUsersInputEnvelope)
    createMany?: merchantsCreateManyUsersInputEnvelope;

    @Field(() => [merchantsWhereUniqueInput], {nullable:true})
    @Type(() => merchantsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<merchantsWhereUniqueInput, 'id'>>;

    @Field(() => [merchantsWhereUniqueInput], {nullable:true})
    @Type(() => merchantsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<merchantsWhereUniqueInput, 'id'>>;

    @Field(() => [merchantsWhereUniqueInput], {nullable:true})
    @Type(() => merchantsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<merchantsWhereUniqueInput, 'id'>>;

    @Field(() => [merchantsWhereUniqueInput], {nullable:true})
    @Type(() => merchantsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<merchantsWhereUniqueInput, 'id'>>;

    @Field(() => [merchantsUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => merchantsUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<merchantsUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [merchantsUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => merchantsUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<merchantsUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [merchantsScalarWhereInput], {nullable:true})
    @Type(() => merchantsScalarWhereInput)
    deleteMany?: Array<merchantsScalarWhereInput>;
}
