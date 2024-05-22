import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsCreateManyCategoriesInput } from './products-create-many-categories.input';
import { Type } from 'class-transformer';

@InputType()
export class productsCreateManyCategoriesInputEnvelope {

    @Field(() => [productsCreateManyCategoriesInput], {nullable:false})
    @Type(() => productsCreateManyCategoriesInput)
    data!: Array<productsCreateManyCategoriesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
