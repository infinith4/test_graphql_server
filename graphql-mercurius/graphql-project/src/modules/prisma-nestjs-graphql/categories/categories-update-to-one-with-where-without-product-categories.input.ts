import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesWhereInput } from './categories-where.input';
import { Type } from 'class-transformer';
import { categoriesUpdateWithoutProduct_categoriesInput } from './categories-update-without-product-categories.input';

@InputType()
export class categoriesUpdateToOneWithWhereWithoutProduct_categoriesInput {

    @Field(() => categoriesWhereInput, {nullable:true})
    @Type(() => categoriesWhereInput)
    where?: categoriesWhereInput;

    @Field(() => categoriesUpdateWithoutProduct_categoriesInput, {nullable:false})
    @Type(() => categoriesUpdateWithoutProduct_categoriesInput)
    data!: categoriesUpdateWithoutProduct_categoriesInput;
}
