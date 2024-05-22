import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsUpdateWithoutProduct_categoriesInput } from './products-update-without-product-categories.input';
import { Type } from 'class-transformer';
import { productsCreateWithoutProduct_categoriesInput } from './products-create-without-product-categories.input';
import { productsWhereInput } from './products-where.input';

@InputType()
export class productsUpsertWithoutProduct_categoriesInput {

    @Field(() => productsUpdateWithoutProduct_categoriesInput, {nullable:false})
    @Type(() => productsUpdateWithoutProduct_categoriesInput)
    update!: productsUpdateWithoutProduct_categoriesInput;

    @Field(() => productsCreateWithoutProduct_categoriesInput, {nullable:false})
    @Type(() => productsCreateWithoutProduct_categoriesInput)
    create!: productsCreateWithoutProduct_categoriesInput;

    @Field(() => productsWhereInput, {nullable:true})
    @Type(() => productsWhereInput)
    where?: productsWhereInput;
}
