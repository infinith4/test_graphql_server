import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesWhereInput } from '../categories/categories-where.input';

@InputType()
export class CategoriesRelationFilter {

    @Field(() => categoriesWhereInput, {nullable:true})
    is?: categoriesWhereInput;

    @Field(() => categoriesWhereInput, {nullable:true})
    isNot?: categoriesWhereInput;
}
