import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesCreateManyCategoriesInput } from './categories-create-many-categories.input';
import { Type } from 'class-transformer';

@InputType()
export class categoriesCreateManyCategoriesInputEnvelope {

    @Field(() => [categoriesCreateManyCategoriesInput], {nullable:false})
    @Type(() => categoriesCreateManyCategoriesInput)
    data!: Array<categoriesCreateManyCategoriesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
