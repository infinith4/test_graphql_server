import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { product_categoriesScalarWhereInput } from './product-categories-scalar-where.input';
import { Type } from 'class-transformer';
import { product_categoriesUncheckedUpdateManyWithoutProductsInput } from './product-categories-unchecked-update-many-without-products.input';

@InputType()
export class product_categoriesUpdateManyWithWhereWithoutProductsInput {

    @Field(() => product_categoriesScalarWhereInput, {nullable:false})
    @Type(() => product_categoriesScalarWhereInput)
    where!: product_categoriesScalarWhereInput;

    @Field(() => product_categoriesUncheckedUpdateManyWithoutProductsInput, {nullable:false})
    @Type(() => product_categoriesUncheckedUpdateManyWithoutProductsInput)
    data!: product_categoriesUncheckedUpdateManyWithoutProductsInput;
}
