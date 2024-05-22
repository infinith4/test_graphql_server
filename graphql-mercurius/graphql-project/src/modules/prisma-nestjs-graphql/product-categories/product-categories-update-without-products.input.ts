import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesUpdateOneRequiredWithoutProduct_categoriesNestedInput } from '../categories/categories-update-one-required-without-product-categories-nested.input';

@InputType()
export class product_categoriesUpdateWithoutProductsInput {

    @Field(() => categoriesUpdateOneRequiredWithoutProduct_categoriesNestedInput, {nullable:true})
    categories?: categoriesUpdateOneRequiredWithoutProduct_categoriesNestedInput;
}
