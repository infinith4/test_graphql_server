import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';

@InputType()
export class profilesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    user_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    bio?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    website?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    email?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    users?: usersOrderByWithRelationInput;
}
