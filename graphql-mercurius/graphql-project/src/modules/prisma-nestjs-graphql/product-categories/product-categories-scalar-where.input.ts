import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class product_categoriesScalarWhereInput {

    @Field(() => [product_categoriesScalarWhereInput], {nullable:true})
    AND?: Array<product_categoriesScalarWhereInput>;

    @Field(() => [product_categoriesScalarWhereInput], {nullable:true})
    OR?: Array<product_categoriesScalarWhereInput>;

    @Field(() => [product_categoriesScalarWhereInput], {nullable:true})
    NOT?: Array<product_categoriesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    product_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    category_id?: IntFilter;
}
