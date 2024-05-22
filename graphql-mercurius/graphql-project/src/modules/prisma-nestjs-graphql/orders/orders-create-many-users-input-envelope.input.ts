import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateManyUsersInput } from './orders-create-many-users.input';
import { Type } from 'class-transformer';

@InputType()
export class ordersCreateManyUsersInputEnvelope {

    @Field(() => [ordersCreateManyUsersInput], {nullable:false})
    @Type(() => ordersCreateManyUsersInput)
    data!: Array<ordersCreateManyUsersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
