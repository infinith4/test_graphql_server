import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { merchantsCreateManyInput } from './merchants-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManymerchantsArgs {

    @Field(() => [merchantsCreateManyInput], {nullable:false})
    @Type(() => merchantsCreateManyInput)
    data!: Array<merchantsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
