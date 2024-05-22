import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { orders_status } from './orders-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumorders_statusFilter } from './nested-enumorders-status-filter.input';

@InputType()
export class NestedEnumorders_statusWithAggregatesFilter {

    @Field(() => orders_status, {nullable:true})
    equals?: keyof typeof orders_status;

    @Field(() => [orders_status], {nullable:true})
    in?: Array<keyof typeof orders_status>;

    @Field(() => [orders_status], {nullable:true})
    notIn?: Array<keyof typeof orders_status>;

    @Field(() => NestedEnumorders_statusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumorders_statusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumorders_statusFilter, {nullable:true})
    _min?: NestedEnumorders_statusFilter;

    @Field(() => NestedEnumorders_statusFilter, {nullable:true})
    _max?: NestedEnumorders_statusFilter;
}
