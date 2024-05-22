import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { articlesCreateManyInput } from './articles-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyarticlesArgs {

    @Field(() => [articlesCreateManyInput], {nullable:false})
    @Type(() => articlesCreateManyInput)
    data!: Array<articlesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
