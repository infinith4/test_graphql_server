import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersCreateWithoutOrdersInput } from './customers-create-without-orders.input';
import { Type } from 'class-transformer';
import { customersCreateOrConnectWithoutOrdersInput } from './customers-create-or-connect-without-orders.input';
import { customersUpsertWithoutOrdersInput } from './customers-upsert-without-orders.input';
import { Prisma } from '@prisma/client';
import { customersWhereUniqueInput } from './customers-where-unique.input';
import { customersUpdateToOneWithWhereWithoutOrdersInput } from './customers-update-to-one-with-where-without-orders.input';

@InputType()
export class customersUpdateOneRequiredWithoutOrdersNestedInput {

    @Field(() => customersCreateWithoutOrdersInput, {nullable:true})
    @Type(() => customersCreateWithoutOrdersInput)
    create?: customersCreateWithoutOrdersInput;

    @Field(() => customersCreateOrConnectWithoutOrdersInput, {nullable:true})
    @Type(() => customersCreateOrConnectWithoutOrdersInput)
    connectOrCreate?: customersCreateOrConnectWithoutOrdersInput;

    @Field(() => customersUpsertWithoutOrdersInput, {nullable:true})
    @Type(() => customersUpsertWithoutOrdersInput)
    upsert?: customersUpsertWithoutOrdersInput;

    @Field(() => customersWhereUniqueInput, {nullable:true})
    @Type(() => customersWhereUniqueInput)
    connect?: Prisma.AtLeast<customersWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => customersUpdateToOneWithWhereWithoutOrdersInput, {nullable:true})
    @Type(() => customersUpdateToOneWithWhereWithoutOrdersInput)
    update?: customersUpdateToOneWithWhereWithoutOrdersInput;
}
