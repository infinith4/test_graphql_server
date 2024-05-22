import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateManyCountriesInput } from './users-create-many-countries.input';
import { Type } from 'class-transformer';

@InputType()
export class usersCreateManyCountriesInputEnvelope {

    @Field(() => [usersCreateManyCountriesInput], {nullable:false})
    @Type(() => usersCreateManyCountriesInput)
    data!: Array<usersCreateManyCountriesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
