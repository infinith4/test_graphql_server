import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { areasCreateInput } from './areas-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneareasArgs {

    @Field(() => areasCreateInput, {nullable:false})
    @Type(() => areasCreateInput)
    data!: areasCreateInput;
}
