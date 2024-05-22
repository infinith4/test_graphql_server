import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { paymentsUpdateManyMutationInput } from './payments-update-many-mutation.input';
import { Type } from 'class-transformer';
import { paymentsWhereInput } from './payments-where.input';

@ArgsType()
export class UpdateManypaymentsArgs {

    @Field(() => paymentsUpdateManyMutationInput, {nullable:false})
    @Type(() => paymentsUpdateManyMutationInput)
    data!: paymentsUpdateManyMutationInput;

    @Field(() => paymentsWhereInput, {nullable:true})
    @Type(() => paymentsWhereInput)
    where?: paymentsWhereInput;
}
