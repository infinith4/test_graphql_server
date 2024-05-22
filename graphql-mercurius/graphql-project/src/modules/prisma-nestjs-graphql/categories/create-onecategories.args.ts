import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categoriesCreateInput } from './categories-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnecategoriesArgs {

    @Field(() => categoriesCreateInput, {nullable:false})
    @Type(() => categoriesCreateInput)
    data!: categoriesCreateInput;
}
