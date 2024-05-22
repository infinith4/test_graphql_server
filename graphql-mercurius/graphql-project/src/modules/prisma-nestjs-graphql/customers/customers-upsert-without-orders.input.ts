import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersUpdateWithoutOrdersInput } from './customers-update-without-orders.input';
import { Type } from 'class-transformer';
import { customersCreateWithoutOrdersInput } from './customers-create-without-orders.input';
import { customersWhereInput } from './customers-where.input';

@InputType()
export class customersUpsertWithoutOrdersInput {

    @Field(() => customersUpdateWithoutOrdersInput, {nullable:false})
    @Type(() => customersUpdateWithoutOrdersInput)
    update!: customersUpdateWithoutOrdersInput;

    @Field(() => customersCreateWithoutOrdersInput, {nullable:false})
    @Type(() => customersCreateWithoutOrdersInput)
    create!: customersCreateWithoutOrdersInput;

    @Field(() => customersWhereInput, {nullable:true})
    @Type(() => customersWhereInput)
    where?: customersWhereInput;
}
