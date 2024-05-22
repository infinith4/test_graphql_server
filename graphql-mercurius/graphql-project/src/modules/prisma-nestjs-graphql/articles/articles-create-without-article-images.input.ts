import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { articles_status } from '../prisma/articles-status.enum';
import { usersCreateNestedOneWithoutArticlesInput } from '../users/users-create-nested-one-without-articles.input';

@InputType()
export class articlesCreateWithoutArticle_imagesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => articles_status, {nullable:true})
    status?: keyof typeof articles_status;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutArticlesInput, {nullable:false})
    users!: usersCreateNestedOneWithoutArticlesInput;
}
