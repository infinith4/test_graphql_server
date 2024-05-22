import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { articles_status } from '../prisma/articles-status.enum';

@InputType()
export class articlesUncheckedCreateWithoutUsersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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
}
