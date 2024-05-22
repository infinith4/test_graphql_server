import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { articles_status } from '../prisma/articles-status.enum';

@InputType()
export class articlesUncheckedCreateWithoutArticle_imagesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => articles_status, {nullable:true})
    status?: keyof typeof articles_status;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
