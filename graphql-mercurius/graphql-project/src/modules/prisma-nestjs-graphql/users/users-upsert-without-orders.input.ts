import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutOrdersInput } from './users-update-without-orders.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrdersInput } from './users-create-without-orders.input';
import { usersWhereInput } from './users-where.input';

@InputType()
export class usersUpsertWithoutOrdersInput {

    @Field(() => usersUpdateWithoutOrdersInput, {nullable:false})
    @Type(() => usersUpdateWithoutOrdersInput)
    update!: usersUpdateWithoutOrdersInput;

    @Field(() => usersCreateWithoutOrdersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrdersInput)
    create!: usersCreateWithoutOrdersInput;

    @Field(() => usersWhereInput, {nullable:true})
    @Type(() => usersWhereInput)
    where?: usersWhereInput;
}
