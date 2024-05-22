import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutMerchantsInput } from './users-update-without-merchants.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutMerchantsInput } from './users-create-without-merchants.input';
import { usersWhereInput } from './users-where.input';

@InputType()
export class usersUpsertWithoutMerchantsInput {

    @Field(() => usersUpdateWithoutMerchantsInput, {nullable:false})
    @Type(() => usersUpdateWithoutMerchantsInput)
    update!: usersUpdateWithoutMerchantsInput;

    @Field(() => usersCreateWithoutMerchantsInput, {nullable:false})
    @Type(() => usersCreateWithoutMerchantsInput)
    create!: usersCreateWithoutMerchantsInput;

    @Field(() => usersWhereInput, {nullable:true})
    @Type(() => usersWhereInput)
    where?: usersWhereInput;
}
