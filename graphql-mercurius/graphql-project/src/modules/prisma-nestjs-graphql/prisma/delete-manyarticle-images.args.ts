import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { article_imagesWhereInput } from '../article-images/article-images-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyarticleImagesArgs {

    @Field(() => article_imagesWhereInput, {nullable:true})
    @Type(() => article_imagesWhereInput)
    where?: article_imagesWhereInput;
}
