import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class articlesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    status?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    user_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    created_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    updated_at?: SortOrderInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    @Type(() => usersOrderByWithRelationInput)
    users?: usersOrderByWithRelationInput;
}
