import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesUpdateWithoutProductsInput } from './categories-update-without-products.input';
import { Type } from 'class-transformer';
import { categoriesCreateWithoutProductsInput } from './categories-create-without-products.input';
import { categoriesWhereInput } from './categories-where.input';

@InputType()
export class categoriesUpsertWithoutProductsInput {

    @Field(() => categoriesUpdateWithoutProductsInput, {nullable:false})
    @Type(() => categoriesUpdateWithoutProductsInput)
    update!: categoriesUpdateWithoutProductsInput;

    @Field(() => categoriesCreateWithoutProductsInput, {nullable:false})
    @Type(() => categoriesCreateWithoutProductsInput)
    create!: categoriesCreateWithoutProductsInput;

    @Field(() => categoriesWhereInput, {nullable:true})
    @Type(() => categoriesWhereInput)
    where?: categoriesWhereInput;
}
