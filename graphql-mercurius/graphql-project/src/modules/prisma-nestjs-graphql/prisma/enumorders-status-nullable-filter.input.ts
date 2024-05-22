import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { orders_status } from './orders-status.enum';
import { NestedEnumorders_statusNullableFilter } from './nested-enumorders-status-nullable-filter.input';

@InputType()
export class Enumorders_statusNullableFilter {

    @Field(() => orders_status, {nullable:true})
    equals?: keyof typeof orders_status;

    @Field(() => [orders_status], {nullable:true})
    in?: Array<keyof typeof orders_status>;

    @Field(() => [orders_status], {nullable:true})
    notIn?: Array<keyof typeof orders_status>;

    @Field(() => NestedEnumorders_statusNullableFilter, {nullable:true})
    not?: NestedEnumorders_statusNullableFilter;
}
