import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { paymentsWhereInput } from './payments-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypaymentsArgs {

    @Field(() => paymentsWhereInput, {nullable:true})
    @Type(() => paymentsWhereInput)
    where?: paymentsWhereInput;
}
