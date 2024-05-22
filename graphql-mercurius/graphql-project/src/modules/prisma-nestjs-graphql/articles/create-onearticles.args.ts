import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { articlesCreateInput } from './articles-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnearticlesArgs {

    @Field(() => articlesCreateInput, {nullable:false})
    @Type(() => articlesCreateInput)
    data!: articlesCreateInput;
}
