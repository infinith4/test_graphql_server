import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { paymentsCreateManyOrdersInput } from './payments-create-many-orders.input';
import { Type } from 'class-transformer';

@InputType()
export class paymentsCreateManyOrdersInputEnvelope {

    @Field(() => [paymentsCreateManyOrdersInput], {nullable:false})
    @Type(() => paymentsCreateManyOrdersInput)
    data!: Array<paymentsCreateManyOrdersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
