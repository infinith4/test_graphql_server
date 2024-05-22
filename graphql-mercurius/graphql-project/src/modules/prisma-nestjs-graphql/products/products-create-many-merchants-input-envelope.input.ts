import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { productsCreateManyMerchantsInput } from './products-create-many-merchants.input';
import { Type } from 'class-transformer';

@InputType()
export class productsCreateManyMerchantsInputEnvelope {

    @Field(() => [productsCreateManyMerchantsInput], {nullable:false})
    @Type(() => productsCreateManyMerchantsInput)
    data!: Array<productsCreateManyMerchantsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
