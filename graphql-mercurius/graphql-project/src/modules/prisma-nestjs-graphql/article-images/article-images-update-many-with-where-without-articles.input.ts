import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { article_imagesScalarWhereInput } from './article-images-scalar-where.input';
import { Type } from 'class-transformer';
import { article_imagesUpdateManyMutationInput } from './article-images-update-many-mutation.input';

@InputType()
export class article_imagesUpdateManyWithWhereWithoutArticlesInput {

    @Field(() => article_imagesScalarWhereInput, {nullable:false})
    @Type(() => article_imagesScalarWhereInput)
    where!: article_imagesScalarWhereInput;

    @Field(() => article_imagesUpdateManyMutationInput, {nullable:false})
    @Type(() => article_imagesUpdateManyMutationInput)
    data!: article_imagesUpdateManyMutationInput;
}
