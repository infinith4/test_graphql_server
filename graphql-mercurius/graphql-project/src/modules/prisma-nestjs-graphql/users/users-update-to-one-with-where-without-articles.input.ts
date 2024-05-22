import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereInput } from './users-where.input';
import { Type } from 'class-transformer';
import { usersUpdateWithoutArticlesInput } from './users-update-without-articles.input';

@InputType()
export class usersUpdateToOneWithWhereWithoutArticlesInput {

    @Field(() => usersWhereInput, {nullable:true})
    @Type(() => usersWhereInput)
    where?: usersWhereInput;

    @Field(() => usersUpdateWithoutArticlesInput, {nullable:false})
    @Type(() => usersUpdateWithoutArticlesInput)
    data!: usersUpdateWithoutArticlesInput;
}
