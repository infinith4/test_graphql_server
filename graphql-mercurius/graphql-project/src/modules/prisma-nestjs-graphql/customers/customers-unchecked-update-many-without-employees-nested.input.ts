import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersCreateWithoutEmployeesInput } from './customers-create-without-employees.input';
import { Type } from 'class-transformer';
import { customersCreateOrConnectWithoutEmployeesInput } from './customers-create-or-connect-without-employees.input';
import { customersUpsertWithWhereUniqueWithoutEmployeesInput } from './customers-upsert-with-where-unique-without-employees.input';
import { customersCreateManyEmployeesInputEnvelope } from './customers-create-many-employees-input-envelope.input';
import { Prisma } from '@prisma/client';
import { customersWhereUniqueInput } from './customers-where-unique.input';
import { customersUpdateWithWhereUniqueWithoutEmployeesInput } from './customers-update-with-where-unique-without-employees.input';
import { customersUpdateManyWithWhereWithoutEmployeesInput } from './customers-update-many-with-where-without-employees.input';
import { customersScalarWhereInput } from './customers-scalar-where.input';

@InputType()
export class customersUncheckedUpdateManyWithoutEmployeesNestedInput {

    @Field(() => [customersCreateWithoutEmployeesInput], {nullable:true})
    @Type(() => customersCreateWithoutEmployeesInput)
    create?: Array<customersCreateWithoutEmployeesInput>;

    @Field(() => [customersCreateOrConnectWithoutEmployeesInput], {nullable:true})
    @Type(() => customersCreateOrConnectWithoutEmployeesInput)
    connectOrCreate?: Array<customersCreateOrConnectWithoutEmployeesInput>;

    @Field(() => [customersUpsertWithWhereUniqueWithoutEmployeesInput], {nullable:true})
    @Type(() => customersUpsertWithWhereUniqueWithoutEmployeesInput)
    upsert?: Array<customersUpsertWithWhereUniqueWithoutEmployeesInput>;

    @Field(() => customersCreateManyEmployeesInputEnvelope, {nullable:true})
    @Type(() => customersCreateManyEmployeesInputEnvelope)
    createMany?: customersCreateManyEmployeesInputEnvelope;

    @Field(() => [customersWhereUniqueInput], {nullable:true})
    @Type(() => customersWhereUniqueInput)
    set?: Array<Prisma.AtLeast<customersWhereUniqueInput, 'id' | 'user_id'>>;

    @Field(() => [customersWhereUniqueInput], {nullable:true})
    @Type(() => customersWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<customersWhereUniqueInput, 'id' | 'user_id'>>;

    @Field(() => [customersWhereUniqueInput], {nullable:true})
    @Type(() => customersWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<customersWhereUniqueInput, 'id' | 'user_id'>>;

    @Field(() => [customersWhereUniqueInput], {nullable:true})
    @Type(() => customersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<customersWhereUniqueInput, 'id' | 'user_id'>>;

    @Field(() => [customersUpdateWithWhereUniqueWithoutEmployeesInput], {nullable:true})
    @Type(() => customersUpdateWithWhereUniqueWithoutEmployeesInput)
    update?: Array<customersUpdateWithWhereUniqueWithoutEmployeesInput>;

    @Field(() => [customersUpdateManyWithWhereWithoutEmployeesInput], {nullable:true})
    @Type(() => customersUpdateManyWithWhereWithoutEmployeesInput)
    updateMany?: Array<customersUpdateManyWithWhereWithoutEmployeesInput>;

    @Field(() => [customersScalarWhereInput], {nullable:true})
    @Type(() => customersScalarWhereInput)
    deleteMany?: Array<customersScalarWhereInput>;
}
