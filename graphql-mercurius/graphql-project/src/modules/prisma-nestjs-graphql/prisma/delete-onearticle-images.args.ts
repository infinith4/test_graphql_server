import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { article_imagesWhereUniqueInput } from '../article-images/article-images-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnearticleImagesArgs {

    @Field(() => article_imagesWhereUniqueInput, {nullable:false})
    @Type(() => article_imagesWhereUniqueInput)
    where!: article_imagesWhereUniqueInput;
}
