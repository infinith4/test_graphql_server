import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutCountriesInput } from './users-create-without-countries.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutCountriesInput } from './users-create-or-connect-without-countries.input';
import { usersCreateManyCountriesInputEnvelope } from './users-create-many-countries-input-envelope.input';
import { Prisma } from '@prisma/client';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersUncheckedCreateNestedManyWithoutCountriesInput {

    @Field(() => [usersCreateWithoutCountriesInput], {nullable:true})
    @Type(() => usersCreateWithoutCountriesInput)
    create?: Array<usersCreateWithoutCountriesInput>;

    @Field(() => [usersCreateOrConnectWithoutCountriesInput], {nullable:true})
    @Type(() => usersCreateOrConnectWithoutCountriesInput)
    connectOrCreate?: Array<usersCreateOrConnectWithoutCountriesInput>;

    @Field(() => usersCreateManyCountriesInputEnvelope, {nullable:true})
    @Type(() => usersCreateManyCountriesInputEnvelope)
    createMany?: usersCreateManyCountriesInputEnvelope;

    @Field(() => [usersWhereUniqueInput], {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<usersWhereUniqueInput, 'id' | 'username' | 'email'>>;
}
