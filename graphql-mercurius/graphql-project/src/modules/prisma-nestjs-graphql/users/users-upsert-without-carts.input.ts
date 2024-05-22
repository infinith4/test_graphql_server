import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutCartsInput } from './users-update-without-carts.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutCartsInput } from './users-create-without-carts.input';
import { usersWhereInput } from './users-where.input';

@InputType()
export class usersUpsertWithoutCartsInput {

    @Field(() => usersUpdateWithoutCartsInput, {nullable:false})
    @Type(() => usersUpdateWithoutCartsInput)
    update!: usersUpdateWithoutCartsInput;

    @Field(() => usersCreateWithoutCartsInput, {nullable:false})
    @Type(() => usersCreateWithoutCartsInput)
    create!: usersCreateWithoutCartsInput;

    @Field(() => usersWhereInput, {nullable:true})
    @Type(() => usersWhereInput)
    where?: usersWhereInput;
}
