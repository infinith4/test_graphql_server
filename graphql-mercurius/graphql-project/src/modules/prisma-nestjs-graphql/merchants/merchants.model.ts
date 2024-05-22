import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { merchant_images } from '../merchant-images/merchant-images.model';
import { users } from '../users/users.model';
import { countries } from '../countries/countries.model';
import { products } from '../products/products.model';
import { MerchantsCount } from '../prisma/merchants-count.output';

/**
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
@ObjectType({description:'This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments'})
export class merchants {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => Int, {nullable:false})
    admin_id!: number;

    @Field(() => Int, {nullable:true})
    country_code!: number | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:true})
    updated_at!: Date | null;

    @Field(() => [merchant_images], {nullable:true})
    merchant_images?: Array<merchant_images>;

    @Field(() => users, {nullable:false})
    users?: users;

    @Field(() => countries, {nullable:true})
    countries?: countries | null;

    @Field(() => [products], {nullable:true})
    products?: Array<products>;

    @Field(() => MerchantsCount, {nullable:false})
    _count?: MerchantsCount;
}
