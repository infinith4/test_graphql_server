import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesWhereInput } from '../categories/categories-where.input';

@InputType()
export class CategoriesListRelationFilter {

    @Field(() => categoriesWhereInput, {nullable:true})
    every?: categoriesWhereInput;

    @Field(() => categoriesWhereInput, {nullable:true})
    some?: categoriesWhereInput;

    @Field(() => categoriesWhereInput, {nullable:true})
    none?: categoriesWhereInput;
}
