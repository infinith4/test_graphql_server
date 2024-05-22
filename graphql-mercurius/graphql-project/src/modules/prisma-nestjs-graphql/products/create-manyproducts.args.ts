import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { productsCreateManyInput } from './products-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyproductsArgs {

    @Field(() => [productsCreateManyInput], {nullable:false})
    @Type(() => productsCreateManyInput)
    data!: Array<productsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
