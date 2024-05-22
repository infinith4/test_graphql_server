import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { customersWhereUniqueInput } from './customers-where-unique.input';
import { Type } from 'class-transformer';
import { customersCreateWithoutOrdersInput } from './customers-create-without-orders.input';

@InputType()
export class customersCreateOrConnectWithoutOrdersInput {

    @Field(() => customersWhereUniqueInput, {nullable:false})
    @Type(() => customersWhereUniqueInput)
    where!: Prisma.AtLeast<customersWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => customersCreateWithoutOrdersInput, {nullable:false})
    @Type(() => customersCreateWithoutOrdersInput)
    create!: customersCreateWithoutOrdersInput;
}
