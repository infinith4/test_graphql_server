import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class countriesSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
}
