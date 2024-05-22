import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { merchantsWhereInput } from '../merchants/merchants-where.input';

@InputType()
export class MerchantsRelationFilter {

    @Field(() => merchantsWhereInput, {nullable:true})
    is?: merchantsWhereInput;

    @Field(() => merchantsWhereInput, {nullable:true})
    isNot?: merchantsWhereInput;
}
