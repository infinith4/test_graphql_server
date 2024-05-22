import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { customersWhereUniqueInput } from './customers-where-unique.input';
import { Type } from 'class-transformer';
import { customersCreateWithoutInvoicesInput } from './customers-create-without-invoices.input';

@InputType()
export class customersCreateOrConnectWithoutInvoicesInput {

    @Field(() => customersWhereUniqueInput, {nullable:false})
    @Type(() => customersWhereUniqueInput)
    where!: Prisma.AtLeast<customersWhereUniqueInput, 'id' | 'user_id'>;

    @Field(() => customersCreateWithoutInvoicesInput, {nullable:false})
    @Type(() => customersCreateWithoutInvoicesInput)
    create!: customersCreateWithoutInvoicesInput;
}
