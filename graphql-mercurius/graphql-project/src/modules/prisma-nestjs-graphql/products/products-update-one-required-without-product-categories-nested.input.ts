import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsCreateWithoutProduct_categoriesInput } from './products-create-without-product-categories.input';
import { Type } from 'class-transformer';
import { productsCreateOrConnectWithoutProduct_categoriesInput } from './products-create-or-connect-without-product-categories.input';
import { productsUpsertWithoutProduct_categoriesInput } from './products-upsert-without-product-categories.input';
import { Prisma } from '@prisma/client';
import { productsWhereUniqueInput } from './products-where-unique.input';
import { productsUpdateToOneWithWhereWithoutProduct_categoriesInput } from './products-update-to-one-with-where-without-product-categories.input';

@InputType()
export class productsUpdateOneRequiredWithoutProduct_categoriesNestedInput {

    @Field(() => productsCreateWithoutProduct_categoriesInput, {nullable:true})
    @Type(() => productsCreateWithoutProduct_categoriesInput)
    create?: productsCreateWithoutProduct_categoriesInput;

    @Field(() => productsCreateOrConnectWithoutProduct_categoriesInput, {nullable:true})
    @Type(() => productsCreateOrConnectWithoutProduct_categoriesInput)
    connectOrCreate?: productsCreateOrConnectWithoutProduct_categoriesInput;

    @Field(() => productsUpsertWithoutProduct_categoriesInput, {nullable:true})
    @Type(() => productsUpsertWithoutProduct_categoriesInput)
    upsert?: productsUpsertWithoutProduct_categoriesInput;

    @Field(() => productsWhereUniqueInput, {nullable:true})
    @Type(() => productsWhereUniqueInput)
    connect?: Prisma.AtLeast<productsWhereUniqueInput, 'id'>;

    @Field(() => productsUpdateToOneWithWhereWithoutProduct_categoriesInput, {nullable:true})
    @Type(() => productsUpdateToOneWithWhereWithoutProduct_categoriesInput)
    update?: productsUpdateToOneWithWhereWithoutProduct_categoriesInput;
}
