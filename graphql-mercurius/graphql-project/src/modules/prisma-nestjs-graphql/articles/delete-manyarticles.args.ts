import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { articlesWhereInput } from './articles-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyarticlesArgs {

    @Field(() => articlesWhereInput, {nullable:true})
    @Type(() => articlesWhereInput)
    where?: articlesWhereInput;
}
