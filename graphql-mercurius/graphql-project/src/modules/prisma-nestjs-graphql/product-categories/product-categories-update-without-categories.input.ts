import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsUpdateOneRequiredWithoutProduct_categoriesNestedInput } from '../products/products-update-one-required-without-product-categories-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class product_categoriesUpdateWithoutCategoriesInput {

    @Field(() => productsUpdateOneRequiredWithoutProduct_categoriesNestedInput, {nullable:true})
    @Type(() => productsUpdateOneRequiredWithoutProduct_categoriesNestedInput)
    products?: productsUpdateOneRequiredWithoutProduct_categoriesNestedInput;
}
