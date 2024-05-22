import { registerEnumType } from '@nestjs/graphql';

export enum countries_continent_code {
    af = "af",
    an = "an",
    as = "as",
    eu = "eu",
    na = "na",
    oc = "oc",
    sa = "sa"
}


registerEnumType(countries_continent_code, { name: 'countries_continent_code', description: undefined })
