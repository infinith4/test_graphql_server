import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { articles_status } from '../prisma/articles-status.enum';
import { usersCreateNestedOneWithoutArticlesInput } from '../users/users-create-nested-one-without-articles.input';
import { Type } from 'class-transformer';

@InputType()
export class articlesCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => articles_status, {nullable:true})
    status?: keyof typeof articles_status;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutArticlesInput, {nullable:true})
    @Type(() => usersCreateNestedOneWithoutArticlesInput)
    users?: usersCreateNestedOneWithoutArticlesInput;
}
