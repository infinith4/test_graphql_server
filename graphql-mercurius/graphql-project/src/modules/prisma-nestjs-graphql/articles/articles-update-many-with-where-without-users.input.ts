import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { articlesScalarWhereInput } from './articles-scalar-where.input';
import { Type } from 'class-transformer';
import { articlesUpdateManyMutationInput } from './articles-update-many-mutation.input';

@InputType()
export class articlesUpdateManyWithWhereWithoutUsersInput {

    @Field(() => articlesScalarWhereInput, {nullable:false})
    @Type(() => articlesScalarWhereInput)
    where!: articlesScalarWhereInput;

    @Field(() => articlesUpdateManyMutationInput, {nullable:false})
    @Type(() => articlesUpdateManyMutationInput)
    data!: articlesUpdateManyMutationInput;
}
