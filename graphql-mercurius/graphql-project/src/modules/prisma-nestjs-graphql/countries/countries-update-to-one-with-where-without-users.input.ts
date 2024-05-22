import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { countriesWhereInput } from './countries-where.input';
import { Type } from 'class-transformer';
import { countriesUpdateWithoutUsersInput } from './countries-update-without-users.input';

@InputType()
export class countriesUpdateToOneWithWhereWithoutUsersInput {

    @Field(() => countriesWhereInput, {nullable:true})
    @Type(() => countriesWhereInput)
    where?: countriesWhereInput;

    @Field(() => countriesUpdateWithoutUsersInput, {nullable:false})
    @Type(() => countriesUpdateWithoutUsersInput)
    data!: countriesUpdateWithoutUsersInput;
}
