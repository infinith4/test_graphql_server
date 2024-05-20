import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { orders_status } from '../../orders/entities/orders-status.enum';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { OrderItem } from '../../order-items/entities/order-item.entity';
import { users } from '../../users/entities/user.entity';
import { payments } from '../../payments/entities/payment.entity';
import { OrdersCount } from './orders-count.output';

@ObjectType()
export class orders {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    user_id!: number | null;

    @Field(() => orders_status, {nullable:false,defaultValue:'pending'})
    status!: keyof typeof orders_status;

    @Field(() => GraphQLDecimal, {nullable:false})
    total!: Decimal;

    @Field(() => Date, {nullable:true})
    created_at!: Date | null;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;

    @Field(() => [OrderItem], {nullable:true})
    order_items?: Array<OrderItem>;

    @Field(() => users, {nullable:true})
    users?: users | null;

    @Field(() => [payments], {nullable:true})
    payments?: Array<payments>;

    @Field(() => OrdersCount, {nullable:false})
    _count?: OrdersCount;
}
