import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { product_categoriesCreateManyCategoriesInput } from './product-categories-create-many-categories.input';
import { Type } from 'class-transformer';

@InputType()
export class product_categoriesCreateManyCategoriesInputEnvelope {

    @Field(() => [product_categoriesCreateManyCategoriesInput], {nullable:false})
    @Type(() => product_categoriesCreateManyCategoriesInput)
    data!: Array<product_categoriesCreateManyCategoriesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
