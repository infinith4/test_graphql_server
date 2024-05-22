import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { articlesCreateManyUsersInput } from './articles-create-many-users.input';
import { Type } from 'class-transformer';

@InputType()
export class articlesCreateManyUsersInputEnvelope {

    @Field(() => [articlesCreateManyUsersInput], {nullable:false})
    @Type(() => articlesCreateManyUsersInput)
    data!: Array<articlesCreateManyUsersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
