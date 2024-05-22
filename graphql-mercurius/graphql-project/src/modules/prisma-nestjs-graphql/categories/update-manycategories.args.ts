import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categoriesUpdateManyMutationInput } from './categories-update-many-mutation.input';
import { Type } from 'class-transformer';
import { categoriesWhereInput } from './categories-where.input';

@ArgsType()
export class UpdateManycategoriesArgs {

    @Field(() => categoriesUpdateManyMutationInput, {nullable:false})
    @Type(() => categoriesUpdateManyMutationInput)
    data!: categoriesUpdateManyMutationInput;

    @Field(() => categoriesWhereInput, {nullable:true})
    @Type(() => categoriesWhereInput)
    where?: categoriesWhereInput;
}
