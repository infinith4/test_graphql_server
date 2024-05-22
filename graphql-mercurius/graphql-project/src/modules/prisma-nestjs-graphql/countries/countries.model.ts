import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { countries_continent_code } from '../prisma/countries-continent-code.enum';
import { merchants } from '../merchants/merchants.model';
import { users } from '../users/users.model';
import { CountriesCount } from '../prisma/countries-count.output';

@ObjectType()
export class countries {

    @Field(() => ID, {nullable:false})
    code!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => countries_continent_code, {nullable:true})
    continent_code!: keyof typeof countries_continent_code | null;

    @Field(() => [merchants], {nullable:true})
    merchants?: Array<merchants>;

    @Field(() => [users], {nullable:true})
    users?: Array<users>;

    @Field(() => CountriesCount, {nullable:false})
    _count?: CountriesCount;
}
