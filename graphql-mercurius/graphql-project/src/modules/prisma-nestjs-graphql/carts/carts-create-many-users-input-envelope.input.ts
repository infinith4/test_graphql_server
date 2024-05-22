import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cartsCreateManyUsersInput } from './carts-create-many-users.input';
import { Type } from 'class-transformer';

@InputType()
export class cartsCreateManyUsersInputEnvelope {

    @Field(() => [cartsCreateManyUsersInput], {nullable:false})
    @Type(() => cartsCreateManyUsersInput)
    data!: Array<cartsCreateManyUsersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
