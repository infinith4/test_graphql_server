import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersCreateWithoutOrdersInput } from './customers-create-without-orders.input';
import { Type } from 'class-transformer';
import { customersCreateOrConnectWithoutOrdersInput } from './customers-create-or-connect-without-orders.input';
import { Prisma } from '@prisma/client';
import { customersWhereUniqueInput } from './customers-where-unique.input';

@InputType()
export class customersCreateNestedOneWithoutOrdersInput {

    @Field(() => customersCreateWithoutOrdersInput, {nullable:true})
    @Type(() => customersCreateWithoutOrdersInput)
    create?: customersCreateWithoutOrdersInput;

    @Field(() => customersCreateOrConnectWithoutOrdersInput, {nullable:true})
    @Type(() => customersCreateOrConnectWithoutOrdersInput)
    connectOrCreate?: customersCreateOrConnectWithoutOrdersInput;

    @Field(() => customersWhereUniqueInput, {nullable:true})
    @Type(() => customersWhereUniqueInput)
    connect?: Prisma.AtLeast<customersWhereUniqueInput, 'id' | 'user_id'>;
}
