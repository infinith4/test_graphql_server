import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { products_status } from './products-status.enum';

@InputType()
export class NestedEnumproducts_statusNullableFilter {

    @Field(() => products_status, {nullable:true})
    equals?: keyof typeof products_status;

    @Field(() => [products_status], {nullable:true})
    in?: Array<keyof typeof products_status>;

    @Field(() => [products_status], {nullable:true})
    notIn?: Array<keyof typeof products_status>;

    @Field(() => NestedEnumproducts_statusNullableFilter, {nullable:true})
    not?: NestedEnumproducts_statusNullableFilter;
}
