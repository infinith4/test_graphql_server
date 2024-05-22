import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsScalarWhereInput } from './products-scalar-where.input';
import { Type } from 'class-transformer';
import { productsUpdateManyMutationInput } from './products-update-many-mutation.input';

@InputType()
export class productsUpdateManyWithWhereWithoutCategoriesInput {

    @Field(() => productsScalarWhereInput, {nullable:false})
    @Type(() => productsScalarWhereInput)
    where!: productsScalarWhereInput;

    @Field(() => productsUpdateManyMutationInput, {nullable:false})
    @Type(() => productsUpdateManyMutationInput)
    data!: productsUpdateManyMutationInput;
}
