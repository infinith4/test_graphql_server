import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { articlesUpdateManyMutationInput } from './articles-update-many-mutation.input';
import { Type } from 'class-transformer';
import { articlesWhereInput } from './articles-where.input';

@ArgsType()
export class UpdateManyarticlesArgs {

    @Field(() => articlesUpdateManyMutationInput, {nullable:false})
    @Type(() => articlesUpdateManyMutationInput)
    data!: articlesUpdateManyMutationInput;

    @Field(() => articlesWhereInput, {nullable:true})
    @Type(() => articlesWhereInput)
    where?: articlesWhereInput;
}
