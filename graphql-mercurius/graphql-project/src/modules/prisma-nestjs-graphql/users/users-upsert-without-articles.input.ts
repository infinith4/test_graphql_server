import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutArticlesInput } from './users-update-without-articles.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutArticlesInput } from './users-create-without-articles.input';
import { usersWhereInput } from './users-where.input';

@InputType()
export class usersUpsertWithoutArticlesInput {

    @Field(() => usersUpdateWithoutArticlesInput, {nullable:false})
    @Type(() => usersUpdateWithoutArticlesInput)
    update!: usersUpdateWithoutArticlesInput;

    @Field(() => usersCreateWithoutArticlesInput, {nullable:false})
    @Type(() => usersCreateWithoutArticlesInput)
    create!: usersCreateWithoutArticlesInput;

    @Field(() => usersWhereInput, {nullable:true})
    @Type(() => usersWhereInput)
    where?: usersWhereInput;
}
