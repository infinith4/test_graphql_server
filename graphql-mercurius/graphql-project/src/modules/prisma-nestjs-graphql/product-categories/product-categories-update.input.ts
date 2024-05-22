import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesUpdateOneRequiredWithoutProduct_categoriesNestedInput } from '../categories/categories-update-one-required-without-product-categories-nested.input';
import { productsUpdateOneRequiredWithoutProduct_categoriesNestedInput } from '../products/products-update-one-required-without-product-categories-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class product_categoriesUpdateInput {

    @Field(() => categoriesUpdateOneRequiredWithoutProduct_categoriesNestedInput, {nullable:true})
    categories?: categoriesUpdateOneRequiredWithoutProduct_categoriesNestedInput;

    @Field(() => productsUpdateOneRequiredWithoutProduct_categoriesNestedInput, {nullable:true})
    @Type(() => productsUpdateOneRequiredWithoutProduct_categoriesNestedInput)
    products?: productsUpdateOneRequiredWithoutProduct_categoriesNestedInput;
}
