import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutCountriesInput } from './users-create-without-countries.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutCountriesInput } from './users-create-or-connect-without-countries.input';
import { usersUpsertWithWhereUniqueWithoutCountriesInput } from './users-upsert-with-where-unique-without-countries.input';
import { usersCreateManyCountriesInputEnvelope } from './users-create-many-countries-input-envelope.input';
import { Prisma } from '@prisma/client';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithWhereUniqueWithoutCountriesInput } from './users-update-with-where-unique-without-countries.input';
import { usersUpdateManyWithWhereWithoutCountriesInput } from './users-update-many-with-where-without-countries.input';
import { usersScalarWhereInput } from './users-scalar-where.input';

@InputType()
export class usersUncheckedUpdateManyWithoutCountriesNestedInput {

    @Field(() => [usersCreateWithoutCountriesInput], {nullable:true})
    @Type(() => usersCreateWithoutCountriesInput)
    create?: Array<usersCreateWithoutCountriesInput>;

    @Field(() => [usersCreateOrConnectWithoutCountriesInput], {nullable:true})
    @Type(() => usersCreateOrConnectWithoutCountriesInput)
    connectOrCreate?: Array<usersCreateOrConnectWithoutCountriesInput>;

    @Field(() => [usersUpsertWithWhereUniqueWithoutCountriesInput], {nullable:true})
    @Type(() => usersUpsertWithWhereUniqueWithoutCountriesInput)
    upsert?: Array<usersUpsertWithWhereUniqueWithoutCountriesInput>;

    @Field(() => usersCreateManyCountriesInputEnvelope, {nullable:true})
    @Type(() => usersCreateManyCountriesInputEnvelope)
    createMany?: usersCreateManyCountriesInputEnvelope;

    @Field(() => [usersWhereUniqueInput], {nullable:true})
    @Type(() => usersWhereUniqueInput)
    set?: Array<Prisma.AtLeast<usersWhereUniqueInput, 'id' | 'username' | 'email'>>;

    @Field(() => [usersWhereUniqueInput], {nullable:true})
    @Type(() => usersWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<usersWhereUniqueInput, 'id' | 'username' | 'email'>>;

    @Field(() => [usersWhereUniqueInput], {nullable:true})
    @Type(() => usersWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<usersWhereUniqueInput, 'id' | 'username' | 'email'>>;

    @Field(() => [usersWhereUniqueInput], {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<usersWhereUniqueInput, 'id' | 'username' | 'email'>>;

    @Field(() => [usersUpdateWithWhereUniqueWithoutCountriesInput], {nullable:true})
    @Type(() => usersUpdateWithWhereUniqueWithoutCountriesInput)
    update?: Array<usersUpdateWithWhereUniqueWithoutCountriesInput>;

    @Field(() => [usersUpdateManyWithWhereWithoutCountriesInput], {nullable:true})
    @Type(() => usersUpdateManyWithWhereWithoutCountriesInput)
    updateMany?: Array<usersUpdateManyWithWhereWithoutCountriesInput>;

    @Field(() => [usersScalarWhereInput], {nullable:true})
    @Type(() => usersScalarWhereInput)
    deleteMany?: Array<usersScalarWhereInput>;
}
