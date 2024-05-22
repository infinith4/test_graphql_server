import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { products_status } from './products-status.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumproducts_statusNullableFilter } from './nested-enumproducts-status-nullable-filter.input';

@InputType()
export class NestedEnumproducts_statusNullableWithAggregatesFilter {

    @Field(() => products_status, {nullable:true})
    equals?: keyof typeof products_status;

    @Field(() => [products_status], {nullable:true})
    in?: Array<keyof typeof products_status>;

    @Field(() => [products_status], {nullable:true})
    notIn?: Array<keyof typeof products_status>;

    @Field(() => NestedEnumproducts_statusNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumproducts_statusNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumproducts_statusNullableFilter, {nullable:true})
    _min?: NestedEnumproducts_statusNullableFilter;

    @Field(() => NestedEnumproducts_statusNullableFilter, {nullable:true})
    _max?: NestedEnumproducts_statusNullableFilter;
}
