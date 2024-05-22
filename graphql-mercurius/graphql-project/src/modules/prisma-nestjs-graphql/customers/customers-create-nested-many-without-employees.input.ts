import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersCreateWithoutEmployeesInput } from './customers-create-without-employees.input';
import { Type } from 'class-transformer';
import { customersCreateOrConnectWithoutEmployeesInput } from './customers-create-or-connect-without-employees.input';
import { customersCreateManyEmployeesInputEnvelope } from './customers-create-many-employees-input-envelope.input';
import { Prisma } from '@prisma/client';
import { customersWhereUniqueInput } from './customers-where-unique.input';

@InputType()
export class customersCreateNestedManyWithoutEmployeesInput {

    @Field(() => [customersCreateWithoutEmployeesInput], {nullable:true})
    @Type(() => customersCreateWithoutEmployeesInput)
    create?: Array<customersCreateWithoutEmployeesInput>;

    @Field(() => [customersCreateOrConnectWithoutEmployeesInput], {nullable:true})
    @Type(() => customersCreateOrConnectWithoutEmployeesInput)
    connectOrCreate?: Array<customersCreateOrConnectWithoutEmployeesInput>;

    @Field(() => customersCreateManyEmployeesInputEnvelope, {nullable:true})
    @Type(() => customersCreateManyEmployeesInputEnvelope)
    createMany?: customersCreateManyEmployeesInputEnvelope;

    @Field(() => [customersWhereUniqueInput], {nullable:true})
    @Type(() => customersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<customersWhereUniqueInput, 'id' | 'user_id'>>;
}
