import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { orders_status } from './orders-status.enum';

@InputType()
export class NestedEnumorders_statusFilter {

    @Field(() => orders_status, {nullable:true})
    equals?: keyof typeof orders_status;

    @Field(() => [orders_status], {nullable:true})
    in?: Array<keyof typeof orders_status>;

    @Field(() => [orders_status], {nullable:true})
    notIn?: Array<keyof typeof orders_status>;

    @Field(() => NestedEnumorders_statusFilter, {nullable:true})
    not?: NestedEnumorders_statusFilter;
}
