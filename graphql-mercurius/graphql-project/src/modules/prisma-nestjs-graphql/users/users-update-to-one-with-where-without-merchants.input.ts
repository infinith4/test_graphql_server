import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereInput } from './users-where.input';
import { Type } from 'class-transformer';
import { usersUpdateWithoutMerchantsInput } from './users-update-without-merchants.input';

@InputType()
export class usersUpdateToOneWithWhereWithoutMerchantsInput {

    @Field(() => usersWhereInput, {nullable:true})
    @Type(() => usersWhereInput)
    where?: usersWhereInput;

    @Field(() => usersUpdateWithoutMerchantsInput, {nullable:false})
    @Type(() => usersUpdateWithoutMerchantsInput)
    data!: usersUpdateWithoutMerchantsInput;
}
