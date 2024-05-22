import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class invoice_itemsUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    invoice_id!: number;

    @Field(() => Int, {nullable:false})
    unit_price!: number;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
