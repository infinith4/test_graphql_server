import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { merchantsWhereUniqueInput } from './merchants-where-unique.input';
import { Type } from 'class-transformer';
import { merchantsCreateWithoutProductsInput } from './merchants-create-without-products.input';

@InputType()
export class merchantsCreateOrConnectWithoutProductsInput {

    @Field(() => merchantsWhereUniqueInput, {nullable:false})
    @Type(() => merchantsWhereUniqueInput)
    where!: Prisma.AtLeast<merchantsWhereUniqueInput, 'id'>;

    @Field(() => merchantsCreateWithoutProductsInput, {nullable:false})
    @Type(() => merchantsCreateWithoutProductsInput)
    create!: merchantsCreateWithoutProductsInput;
}
