import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsWhereInput } from './products-where.input';
import { Type } from 'class-transformer';
import { productsUpdateWithoutProduct_categoriesInput } from './products-update-without-product-categories.input';

@InputType()
export class productsUpdateToOneWithWhereWithoutProduct_categoriesInput {

    @Field(() => productsWhereInput, {nullable:true})
    @Type(() => productsWhereInput)
    where?: productsWhereInput;

    @Field(() => productsUpdateWithoutProduct_categoriesInput, {nullable:false})
    @Type(() => productsUpdateWithoutProduct_categoriesInput)
    data!: productsUpdateWithoutProduct_categoriesInput;
}
