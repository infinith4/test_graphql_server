import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { merchantsUpdateManyMutationInput } from './merchants-update-many-mutation.input';
import { Type } from 'class-transformer';
import { merchantsWhereInput } from './merchants-where.input';

@ArgsType()
export class UpdateManymerchantsArgs {

    @Field(() => merchantsUpdateManyMutationInput, {nullable:false})
    @Type(() => merchantsUpdateManyMutationInput)
    data!: merchantsUpdateManyMutationInput;

    @Field(() => merchantsWhereInput, {nullable:true})
    @Type(() => merchantsWhereInput)
    where?: merchantsWhereInput;
}
