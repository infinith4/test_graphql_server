import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateManyCustomersInput } from './orders-create-many-customers.input';
import { Type } from 'class-transformer';

@InputType()
export class ordersCreateManyCustomersInputEnvelope {

    @Field(() => [ordersCreateManyCustomersInput], {nullable:false})
    @Type(() => ordersCreateManyCustomersInput)
    data!: Array<ordersCreateManyCustomersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
