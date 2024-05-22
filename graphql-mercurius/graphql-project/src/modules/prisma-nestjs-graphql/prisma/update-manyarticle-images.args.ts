import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { article_imagesUpdateManyMutationInput } from '../article-images/article-images-update-many-mutation.input';
import { Type } from 'class-transformer';
import { article_imagesWhereInput } from '../article-images/article-images-where.input';

@ArgsType()
export class UpdateManyarticleImagesArgs {

    @Field(() => article_imagesUpdateManyMutationInput, {nullable:false})
    @Type(() => article_imagesUpdateManyMutationInput)
    data!: article_imagesUpdateManyMutationInput;

    @Field(() => article_imagesWhereInput, {nullable:true})
    @Type(() => article_imagesWhereInput)
    where?: article_imagesWhereInput;
}
