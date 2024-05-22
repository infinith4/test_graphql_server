import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { merchantsOrderByRelationAggregateInput } from '../merchants/merchants-order-by-relation-aggregate.input';
import { usersOrderByRelationAggregateInput } from '../users/users-order-by-relation-aggregate.input';

@InputType()
export class countriesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    name?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    continent_code?: SortOrderInput;

    @Field(() => merchantsOrderByRelationAggregateInput, {nullable:true})
    merchants?: merchantsOrderByRelationAggregateInput;

    @Field(() => usersOrderByRelationAggregateInput, {nullable:true})
    users?: usersOrderByRelationAggregateInput;
}
