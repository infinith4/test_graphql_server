import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class PostOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    content?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    published?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    authorId?: SortOrderInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: UserOrderByWithRelationInput;
}
