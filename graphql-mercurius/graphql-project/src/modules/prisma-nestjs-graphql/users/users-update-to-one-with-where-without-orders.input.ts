import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereInput } from './users-where.input';
import { Type } from 'class-transformer';
import { usersUpdateWithoutOrdersInput } from './users-update-without-orders.input';

@InputType()
export class usersUpdateToOneWithWhereWithoutOrdersInput {

    @Field(() => usersWhereInput, {nullable:true})
    @Type(() => usersWhereInput)
    where?: usersWhereInput;

    @Field(() => usersUpdateWithoutOrdersInput, {nullable:false})
    @Type(() => usersUpdateWithoutOrdersInput)
    data!: usersUpdateWithoutOrdersInput;
}
