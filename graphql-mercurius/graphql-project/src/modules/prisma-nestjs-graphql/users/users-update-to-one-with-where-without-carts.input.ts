import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereInput } from './users-where.input';
import { Type } from 'class-transformer';
import { usersUpdateWithoutCartsInput } from './users-update-without-carts.input';

@InputType()
export class usersUpdateToOneWithWhereWithoutCartsInput {

    @Field(() => usersWhereInput, {nullable:true})
    @Type(() => usersWhereInput)
    where?: usersWhereInput;

    @Field(() => usersUpdateWithoutCartsInput, {nullable:false})
    @Type(() => usersUpdateWithoutCartsInput)
    data!: usersUpdateWithoutCartsInput;
}
