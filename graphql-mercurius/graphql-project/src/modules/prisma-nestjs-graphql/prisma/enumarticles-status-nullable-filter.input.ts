import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { articles_status } from './articles-status.enum';
import { NestedEnumarticles_statusNullableFilter } from './nested-enumarticles-status-nullable-filter.input';

@InputType()
export class Enumarticles_statusNullableFilter {

    @Field(() => articles_status, {nullable:true})
    equals?: keyof typeof articles_status;

    @Field(() => [articles_status], {nullable:true})
    in?: Array<keyof typeof articles_status>;

    @Field(() => [articles_status], {nullable:true})
    notIn?: Array<keyof typeof articles_status>;

    @Field(() => NestedEnumarticles_statusNullableFilter, {nullable:true})
    not?: NestedEnumarticles_statusNullableFilter;
}
