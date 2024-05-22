import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { orders_status } from './orders-status.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumorders_statusNullableFilter } from './nested-enumorders-status-nullable-filter.input';

@InputType()
export class NestedEnumorders_statusNullableWithAggregatesFilter {

    @Field(() => orders_status, {nullable:true})
    equals?: keyof typeof orders_status;

    @Field(() => [orders_status], {nullable:true})
    in?: Array<keyof typeof orders_status>;

    @Field(() => [orders_status], {nullable:true})
    notIn?: Array<keyof typeof orders_status>;

    @Field(() => NestedEnumorders_statusNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumorders_statusNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumorders_statusNullableFilter, {nullable:true})
    _min?: NestedEnumorders_statusNullableFilter;

    @Field(() => NestedEnumorders_statusNullableFilter, {nullable:true})
    _max?: NestedEnumorders_statusNullableFilter;
}
