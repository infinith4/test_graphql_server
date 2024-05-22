import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesScalarWhereInput } from './categories-scalar-where.input';
import { Type } from 'class-transformer';
import { categoriesUpdateManyMutationInput } from './categories-update-many-mutation.input';

@InputType()
export class categoriesUpdateManyWithWhereWithoutCategoriesInput {

    @Field(() => categoriesScalarWhereInput, {nullable:false})
    @Type(() => categoriesScalarWhereInput)
    where!: categoriesScalarWhereInput;

    @Field(() => categoriesUpdateManyMutationInput, {nullable:false})
    @Type(() => categoriesUpdateManyMutationInput)
    data!: categoriesUpdateManyMutationInput;
}
