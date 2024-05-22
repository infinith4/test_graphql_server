import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { article_imagesCreateManyArticlesInput } from './article-images-create-many-articles.input';
import { Type } from 'class-transformer';

@InputType()
export class article_imagesCreateManyArticlesInputEnvelope {

    @Field(() => [article_imagesCreateManyArticlesInput], {nullable:false})
    @Type(() => article_imagesCreateManyArticlesInput)
    data!: Array<article_imagesCreateManyArticlesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
