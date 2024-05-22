import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesUpdateWithoutOther_categoriesInput } from './categories-update-without-other-categories.input';
import { Type } from 'class-transformer';
import { categoriesCreateWithoutOther_categoriesInput } from './categories-create-without-other-categories.input';
import { categoriesWhereInput } from './categories-where.input';

@InputType()
export class categoriesUpsertWithoutOther_categoriesInput {

    @Field(() => categoriesUpdateWithoutOther_categoriesInput, {nullable:false})
    @Type(() => categoriesUpdateWithoutOther_categoriesInput)
    update!: categoriesUpdateWithoutOther_categoriesInput;

    @Field(() => categoriesCreateWithoutOther_categoriesInput, {nullable:false})
    @Type(() => categoriesCreateWithoutOther_categoriesInput)
    create!: categoriesCreateWithoutOther_categoriesInput;

    @Field(() => categoriesWhereInput, {nullable:true})
    @Type(() => categoriesWhereInput)
    where?: categoriesWhereInput;
}
