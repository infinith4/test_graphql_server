import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoriesWhereInput } from './categories-where.input';
import { Type } from 'class-transformer';
import { categoriesUpdateWithoutOther_categoriesInput } from './categories-update-without-other-categories.input';

@InputType()
export class categoriesUpdateToOneWithWhereWithoutOther_categoriesInput {

    @Field(() => categoriesWhereInput, {nullable:true})
    @Type(() => categoriesWhereInput)
    where?: categoriesWhereInput;

    @Field(() => categoriesUpdateWithoutOther_categoriesInput, {nullable:false})
    @Type(() => categoriesUpdateWithoutOther_categoriesInput)
    data!: categoriesUpdateWithoutOther_categoriesInput;
}
