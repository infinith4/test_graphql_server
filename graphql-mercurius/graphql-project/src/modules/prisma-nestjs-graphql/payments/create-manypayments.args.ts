import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { paymentsCreateManyInput } from './payments-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManypaymentsArgs {

    @Field(() => [paymentsCreateManyInput], {nullable:false})
    @Type(() => paymentsCreateManyInput)
    data!: Array<paymentsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
