import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { merchantsCreateManyUsersInput } from './merchants-create-many-users.input';
import { Type } from 'class-transformer';

@InputType()
export class merchantsCreateManyUsersInputEnvelope {

    @Field(() => [merchantsCreateManyUsersInput], {nullable:false})
    @Type(() => merchantsCreateManyUsersInput)
    data!: Array<merchantsCreateManyUsersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
