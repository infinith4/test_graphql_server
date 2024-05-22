import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { merchantsCreateWithoutCountriesInput } from './merchants-create-without-countries.input';
import { Type } from 'class-transformer';
import { merchantsCreateOrConnectWithoutCountriesInput } from './merchants-create-or-connect-without-countries.input';
import { merchantsUpsertWithWhereUniqueWithoutCountriesInput } from './merchants-upsert-with-where-unique-without-countries.input';
import { merchantsCreateManyCountriesInputEnvelope } from './merchants-create-many-countries-input-envelope.input';
import { Prisma } from '@prisma/client';
import { merchantsWhereUniqueInput } from './merchants-where-unique.input';
import { merchantsUpdateWithWhereUniqueWithoutCountriesInput } from './merchants-update-with-where-unique-without-countries.input';
import { merchantsUpdateManyWithWhereWithoutCountriesInput } from './merchants-update-many-with-where-without-countries.input';
import { merchantsScalarWhereInput } from './merchants-scalar-where.input';

@InputType()
export class merchantsUncheckedUpdateManyWithoutCountriesNestedInput {

    @Field(() => [merchantsCreateWithoutCountriesInput], {nullable:true})
    @Type(() => merchantsCreateWithoutCountriesInput)
    create?: Array<merchantsCreateWithoutCountriesInput>;

    @Field(() => [merchantsCreateOrConnectWithoutCountriesInput], {nullable:true})
    @Type(() => merchantsCreateOrConnectWithoutCountriesInput)
    connectOrCreate?: Array<merchantsCreateOrConnectWithoutCountriesInput>;

    @Field(() => [merchantsUpsertWithWhereUniqueWithoutCountriesInput], {nullable:true})
    @Type(() => merchantsUpsertWithWhereUniqueWithoutCountriesInput)
    upsert?: Array<merchantsUpsertWithWhereUniqueWithoutCountriesInput>;

    @Field(() => merchantsCreateManyCountriesInputEnvelope, {nullable:true})
    @Type(() => merchantsCreateManyCountriesInputEnvelope)
    createMany?: merchantsCreateManyCountriesInputEnvelope;

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

    @Field(() => [merchantsUpdateWithWhereUniqueWithoutCountriesInput], {nullable:true})
    @Type(() => merchantsUpdateWithWhereUniqueWithoutCountriesInput)
    update?: Array<merchantsUpdateWithWhereUniqueWithoutCountriesInput>;

    @Field(() => [merchantsUpdateManyWithWhereWithoutCountriesInput], {nullable:true})
    @Type(() => merchantsUpdateManyWithWhereWithoutCountriesInput)
    updateMany?: Array<merchantsUpdateManyWithWhereWithoutCountriesInput>;

    @Field(() => [merchantsScalarWhereInput], {nullable:true})
    @Type(() => merchantsScalarWhereInput)
    deleteMany?: Array<merchantsScalarWhereInput>;
}
