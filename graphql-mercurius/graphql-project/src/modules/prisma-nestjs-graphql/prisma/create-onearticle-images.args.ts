import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { article_imagesCreateInput } from '../article-images/article-images-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnearticleImagesArgs {

    @Field(() => article_imagesCreateInput, {nullable:false})
    @Type(() => article_imagesCreateInput)
    data!: article_imagesCreateInput;
}
