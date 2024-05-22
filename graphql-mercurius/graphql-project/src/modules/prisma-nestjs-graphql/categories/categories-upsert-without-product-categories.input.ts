import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesUpdateWithoutProduct_categoriesInput } from './categories-update-without-product-categories.input';
import { Type } from 'class-transformer';
import { categoriesCreateWithoutProduct_categoriesInput } from './categories-create-without-product-categories.input';
import { categoriesWhereInput } from './categories-where.input';

@InputType()
export class categoriesUpsertWithoutProduct_categoriesInput {

    @Field(() => categoriesUpdateWithoutProduct_categoriesInput, {nullable:false})
    @Type(() => categoriesUpdateWithoutProduct_categoriesInput)
    update!: categoriesUpdateWithoutProduct_categoriesInput;

    @Field(() => categoriesCreateWithoutProduct_categoriesInput, {nullable:false})
    @Type(() => categoriesCreateWithoutProduct_categoriesInput)
    create!: categoriesCreateWithoutProduct_categoriesInput;

    @Field(() => categoriesWhereInput, {nullable:true})
    @Type(() => categoriesWhereInput)
    where?: categoriesWhereInput;
}
