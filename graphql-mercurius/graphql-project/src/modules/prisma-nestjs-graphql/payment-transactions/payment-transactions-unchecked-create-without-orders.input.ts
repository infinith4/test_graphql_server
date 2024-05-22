import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class payment_transactionsUncheckedCreateWithoutOrdersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    amount?: number;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:false})
    payment_method!: string;

    @Field(() => String, {nullable:false})
    transaction_id!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
