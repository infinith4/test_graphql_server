import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { article_imagesUpdateInput } from '../article-images/article-images-update.input';
import { Type } from 'class-transformer';
import { article_imagesWhereUniqueInput } from '../article-images/article-images-where-unique.input';

@ArgsType()
export class UpdateOnearticleImagesArgs {

    @Field(() => article_imagesUpdateInput, {nullable:false})
    @Type(() => article_imagesUpdateInput)
    data!: article_imagesUpdateInput;

    @Field(() => article_imagesWhereUniqueInput, {nullable:false})
    @Type(() => article_imagesWhereUniqueInput)
    where!: article_imagesWhereUniqueInput;
}
