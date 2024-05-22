import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { article_imagesCreateManyInput } from '../article-images/article-images-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyarticleImagesArgs {

    @Field(() => [article_imagesCreateManyInput], {nullable:false})
    @Type(() => article_imagesCreateManyInput)
    data!: Array<article_imagesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
