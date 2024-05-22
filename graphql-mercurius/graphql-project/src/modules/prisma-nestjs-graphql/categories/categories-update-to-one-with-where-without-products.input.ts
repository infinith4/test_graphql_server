import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesWhereInput } from './categories-where.input';
import { Type } from 'class-transformer';
import { categoriesUpdateWithoutProductsInput } from './categories-update-without-products.input';

@InputType()
export class categoriesUpdateToOneWithWhereWithoutProductsInput {

    @Field(() => categoriesWhereInput, {nullable:true})
    @Type(() => categoriesWhereInput)
    where?: categoriesWhereInput;

    @Field(() => categoriesUpdateWithoutProductsInput, {nullable:false})
    @Type(() => categoriesUpdateWithoutProductsInput)
    data!: categoriesUpdateWithoutProductsInput;
}
