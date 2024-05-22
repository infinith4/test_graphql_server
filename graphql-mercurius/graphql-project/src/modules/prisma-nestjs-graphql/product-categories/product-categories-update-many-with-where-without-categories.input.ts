import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { product_categoriesScalarWhereInput } from './product-categories-scalar-where.input';
import { Type } from 'class-transformer';
import { product_categoriesUncheckedUpdateManyWithoutCategoriesInput } from './product-categories-unchecked-update-many-without-categories.input';

@InputType()
export class product_categoriesUpdateManyWithWhereWithoutCategoriesInput {

    @Field(() => product_categoriesScalarWhereInput, {nullable:false})
    @Type(() => product_categoriesScalarWhereInput)
    where!: product_categoriesScalarWhereInput;

    @Field(() => product_categoriesUncheckedUpdateManyWithoutCategoriesInput, {nullable:false})
    @Type(() => product_categoriesUncheckedUpdateManyWithoutCategoriesInput)
    data!: product_categoriesUncheckedUpdateManyWithoutCategoriesInput;
}
