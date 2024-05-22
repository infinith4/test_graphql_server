import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { merchantsCreateWithoutCountriesInput } from './merchants-create-without-countries.input';
import { Type } from 'class-transformer';
import { merchantsCreateOrConnectWithoutCountriesInput } from './merchants-create-or-connect-without-countries.input';
import { merchantsCreateManyCountriesInputEnvelope } from './merchants-create-many-countries-input-envelope.input';
import { Prisma } from '@prisma/client';
import { merchantsWhereUniqueInput } from './merchants-where-unique.input';

@InputType()
export class merchantsUncheckedCreateNestedManyWithoutCountriesInput {

    @Field(() => [merchantsCreateWithoutCountriesInput], {nullable:true})
    @Type(() => merchantsCreateWithoutCountriesInput)
    create?: Array<merchantsCreateWithoutCountriesInput>;

    @Field(() => [merchantsCreateOrConnectWithoutCountriesInput], {nullable:true})
    @Type(() => merchantsCreateOrConnectWithoutCountriesInput)
    connectOrCreate?: Array<merchantsCreateOrConnectWithoutCountriesInput>;

    @Field(() => merchantsCreateManyCountriesInputEnvelope, {nullable:true})
    @Type(() => merchantsCreateManyCountriesInputEnvelope)
    createMany?: merchantsCreateManyCountriesInputEnvelope;

    @Field(() => [merchantsWhereUniqueInput], {nullable:true})
    @Type(() => merchantsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<merchantsWhereUniqueInput, 'id'>>;
}
