import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { merchantsWhereInput } from '../merchants/merchants-where.input';

@InputType()
export class MerchantsListRelationFilter {

    @Field(() => merchantsWhereInput, {nullable:true})
    every?: merchantsWhereInput;

    @Field(() => merchantsWhereInput, {nullable:true})
    some?: merchantsWhereInput;

    @Field(() => merchantsWhereInput, {nullable:true})
    none?: merchantsWhereInput;
}
