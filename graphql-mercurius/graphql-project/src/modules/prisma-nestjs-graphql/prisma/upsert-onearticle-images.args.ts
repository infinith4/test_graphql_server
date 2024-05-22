import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { article_imagesWhereUniqueInput } from '../article-images/article-images-where-unique.input';
import { Type } from 'class-transformer';
import { article_imagesCreateInput } from '../article-images/article-images-create.input';
import { article_imagesUpdateInput } from '../article-images/article-images-update.input';

@ArgsType()
export class UpsertOnearticleImagesArgs {

    @Field(() => article_imagesWhereUniqueInput, {nullable:false})
    @Type(() => article_imagesWhereUniqueInput)
    where!: article_imagesWhereUniqueInput;

    @Field(() => article_imagesCreateInput, {nullable:false})
    @Type(() => article_imagesCreateInput)
    create!: article_imagesCreateInput;

    @Field(() => article_imagesUpdateInput, {nullable:false})
    @Type(() => article_imagesUpdateInput)
    update!: article_imagesUpdateInput;
}
