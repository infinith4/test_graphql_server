import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { articles_status } from './articles-status.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumarticles_statusNullableFilter } from './nested-enumarticles-status-nullable-filter.input';

@InputType()
export class NestedEnumarticles_statusNullableWithAggregatesFilter {

    @Field(() => articles_status, {nullable:true})
    equals?: keyof typeof articles_status;

    @Field(() => [articles_status], {nullable:true})
    in?: Array<keyof typeof articles_status>;

    @Field(() => [articles_status], {nullable:true})
    notIn?: Array<keyof typeof articles_status>;

    @Field(() => NestedEnumarticles_statusNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumarticles_statusNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumarticles_statusNullableFilter, {nullable:true})
    _min?: NestedEnumarticles_statusNullableFilter;

    @Field(() => NestedEnumarticles_statusNullableFilter, {nullable:true})
    _max?: NestedEnumarticles_statusNullableFilter;
}
