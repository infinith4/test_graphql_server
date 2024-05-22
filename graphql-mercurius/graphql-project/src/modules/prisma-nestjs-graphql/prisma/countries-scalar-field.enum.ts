import { registerEnumType } from '@nestjs/graphql';

export enum CountriesScalarFieldEnum {
    code = "code",
    name = "name",
    continent_code = "continent_code"
}


registerEnumType(CountriesScalarFieldEnum, { name: 'CountriesScalarFieldEnum', description: undefined })
