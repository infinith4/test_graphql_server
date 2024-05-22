import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersWhereInput } from './customers-where.input';
import { Type } from 'class-transformer';
import { customersUpdateWithoutOrdersInput } from './customers-update-without-orders.input';

@InputType()
export class customersUpdateToOneWithWhereWithoutOrdersInput {

    @Field(() => customersWhereInput, {nullable:true})
    @Type(() => customersWhereInput)
    where?: customersWhereInput;

    @Field(() => customersUpdateWithoutOrdersInput, {nullable:false})
    @Type(() => customersUpdateWithoutOrdersInput)
    data!: customersUpdateWithoutOrdersInput;
}
