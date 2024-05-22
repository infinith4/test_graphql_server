import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { countriesUpdateWithoutUsersInput } from './countries-update-without-users.input';
import { Type } from 'class-transformer';
import { countriesCreateWithoutUsersInput } from './countries-create-without-users.input';
import { countriesWhereInput } from './countries-where.input';

@InputType()
export class countriesUpsertWithoutUsersInput {

    @Field(() => countriesUpdateWithoutUsersInput, {nullable:false})
    @Type(() => countriesUpdateWithoutUsersInput)
    update!: countriesUpdateWithoutUsersInput;

    @Field(() => countriesCreateWithoutUsersInput, {nullable:false})
    @Type(() => countriesCreateWithoutUsersInput)
    create!: countriesCreateWithoutUsersInput;

    @Field(() => countriesWhereInput, {nullable:true})
    @Type(() => countriesWhereInput)
    where?: countriesWhereInput;
}
