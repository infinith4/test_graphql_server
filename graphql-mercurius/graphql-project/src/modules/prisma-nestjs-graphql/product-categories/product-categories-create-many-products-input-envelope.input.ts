import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { product_categoriesCreateManyProductsInput } from './product-categories-create-many-products.input';
import { Type } from 'class-transformer';

@InputType()
export class product_categoriesCreateManyProductsInputEnvelope {

    @Field(() => [product_categoriesCreateManyProductsInput], {nullable:false})
    @Type(() => product_categoriesCreateManyProductsInput)
    data!: Array<product_categoriesCreateManyProductsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
