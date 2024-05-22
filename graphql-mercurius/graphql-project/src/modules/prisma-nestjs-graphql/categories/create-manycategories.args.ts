import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categoriesCreateManyInput } from './categories-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManycategoriesArgs {

    @Field(() => [categoriesCreateManyInput], {nullable:false})
    @Type(() => categoriesCreateManyInput)
    data!: Array<categoriesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
